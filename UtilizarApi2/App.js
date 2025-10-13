import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  ActivityIndicator, 
  Alert,
  RefreshControl,
  Switch,
  TextInput
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import styles from './styles/styles';

const STORAGE_KEYS = {
  USUARIOS: '@usuarios_cache',
  TIMESTAMP: '@usuarios_timestamp',
  PREFERENCIAS: '@user_preferences',
  DATA_INTEGRITY: '@data_integrity_check'
};

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isConnected, setIsConnected] = useState(true);
  const [dataSource, setDataSource] = useState('');
  const [lastUpdate, setLastUpdate] = useState(null);

  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    darkMode: true,
    notifications: true,
    autoSync: true,
    userName: '',
    itemsPerPage: 10,
    language: 'es'
  });
  const [preferencesChanged, setPreferencesChanged] = useState(false);

  useEffect(() => {
    inicializarApp();

    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      
      if (state.isConnected && dataSource === 'cache') {

        sincronizarDatos();
      }
    });

    return () => unsubscribe();
  }, []);


  const inicializarApp = async () => {
    await cargarPreferencias();
    await cargarDatos();
  };

  const cargarPreferencias = async () => {
    try {
      const prefsJSON = await AsyncStorage.getItem(STORAGE_KEYS.PREFERENCIAS);
      if (prefsJSON) {
        const savedPrefs = JSON.parse(prefsJSON);
        setPreferences(savedPrefs);
      }
    } catch (error) {
      console.error('Error al cargar preferencias:', error);
    }
  };

  const guardarPreferencias = async () => {
    try {

      const testKey = '@test_write';
      await AsyncStorage.setItem(testKey, 'test');
      await AsyncStorage.removeItem(testKey);

      const prefsJSON = JSON.stringify(preferences);
      await AsyncStorage.setItem(STORAGE_KEYS.PREFERENCIAS, prefsJSON);

      const checksum = await crearChecksum(prefsJSON);
      await AsyncStorage.setItem(STORAGE_KEYS.DATA_INTEGRITY, checksum);

      setPreferencesChanged(false);
      
      Alert.alert(
        '✅ Preferencias Guardadas',
        'Tus preferencias se han guardado correctamente en el dispositivo.',
        [{ text: 'OK' }]
      );

    } catch (error) {
      console.error('Error al guardar preferencias:', error);
      
      Alert.alert(
        '❌ Error al Guardar',
        'No se pudieron guardar las preferencias correctamente.\n\n' +
        'Posibles causas:\n' +
        '• Almacenamiento lleno\n' +
        '• Permisos insuficientes\n\n' +
        '⚠️ Conéctate a internet para sincronizar tus datos.',
        [
          { text: 'Reintentar', onPress: guardarPreferencias },
          { text: 'Cancelar', style: 'cancel' }
        ]
      );
    }
  };

  const crearChecksum = async (data) => {
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      const char = data.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash.toString();
  };

  const validarIntegridadDatos = async () => {
    try {
      const prefsJSON = await AsyncStorage.getItem(STORAGE_KEYS.PREFERENCIAS);
      const storedChecksum = await AsyncStorage.getItem(STORAGE_KEYS.DATA_INTEGRITY);
      
      if (prefsJSON && storedChecksum) {
        const currentChecksum = await crearChecksum(prefsJSON);
        
        if (currentChecksum !== storedChecksum) {
          Alert.alert(
            '⚠️ Datos Corruptos',
            'Se detectó que los datos guardados pueden estar corruptos.\n\n' +
            'Es necesario conectarse a internet para restaurar la información.',
            [{ text: 'Entendido' }]
          );
          return false;
        }
      }
      return true;
    } catch (error) {
      console.error('Error al validar integridad:', error);
      return false;
    }
  };

  const cargarDatos = async () => {
    try {
      setLoading(true);

      await validarIntegridadDatos();

      const cachedData = await cargarDelCache();
      
      if (cachedData && cachedData.usuarios.length > 0) {
        setUsuarios(cachedData.usuarios);
        setLastUpdate(cachedData.timestamp);
        setDataSource('cache');
        setLoading(false);

        if (isConnected) {
          obtenerUsuariosAPI(false);
        }
      } else {

        if (isConnected) {
          await obtenerUsuariosAPI(true);
        } else {
          setLoading(false);
          Alert.alert(
            '📡 Sin Conexión',
            'No hay datos guardados y no hay conexión a internet.\n\n' +
            'Conéctate a internet para cargar los datos.',
            [{ text: 'OK' }]
          );
        }
      }
    } catch (error) {
      console.error('Error al cargar datos:', error);
      setLoading(false);
    }
  };

  const cargarDelCache = async () => {
    try {
      const usuariosJSON = await AsyncStorage.getItem(STORAGE_KEYS.USUARIOS);
      const timestamp = await AsyncStorage.getItem(STORAGE_KEYS.TIMESTAMP);
      
      if (usuariosJSON && timestamp) {
        const usuarios = JSON.parse(usuariosJSON);

        if (Array.isArray(usuarios) && usuarios.length > 0) {
          return {
            usuarios,
            timestamp: new Date(timestamp)
          };
        }
      }
      return null;
    } catch (error) {
      console.error('Error al cargar del caché:', error);
      
      Alert.alert(
        '⚠️ Error de Lectura',
        'Los datos guardados no se pudieron leer correctamente.\n\n' +
        'Conéctate a internet para restaurar los datos.',
        [{ text: 'OK' }]
      );
      
      return null;
    }
  };

  const guardarEnCache = async (data) => {
    try {

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Datos inválidos para guardar');
      }

      const timestamp = new Date().toISOString();
      const usuariosJSON = JSON.stringify(data);

      await AsyncStorage.setItem(STORAGE_KEYS.USUARIOS, usuariosJSON);
      await AsyncStorage.setItem(STORAGE_KEYS.TIMESTAMP, timestamp);

      const checksum = await crearChecksum(usuariosJSON);
      await AsyncStorage.setItem(STORAGE_KEYS.DATA_INTEGRITY + '_users', checksum);
      
      setLastUpdate(new Date(timestamp));

      const verificacion = await AsyncStorage.getItem(STORAGE_KEYS.USUARIOS);
      if (!verificacion) {
        throw new Error('Falló la verificación de guardado');
      }
      
    } catch (error) {
      console.error('Error al guardar en caché:', error);
      
      Alert.alert(
        '❌ Error al Guardar Datos',
        'No se pudieron guardar los datos correctamente en el dispositivo.\n\n' +
        'Error: ' + error.message + '\n\n' +
        '⚠️ Los datos se cargarán desde internet la próxima vez.',
        [{ text: 'Entendido' }]
      );
      
      throw error;
    }
  };

  const obtenerUsuariosAPI = async (showLoading = true) => {
    if (!isConnected) {
      Alert.alert(
        '📡 Sin Conexión',
        'No hay conexión a internet. Usando datos guardados.',
        [{ text: 'OK' }]
      );
      return;
    }

    try {
      if (showLoading) setLoading(true);
      
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      
      const data = await response.json();

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Datos inválidos recibidos de la API');
      }

      try {
        await guardarEnCache(data);
      } catch (saveError) {

        console.error('No se pudo guardar en caché:', saveError);
      }
      
      setUsuarios(data);
      setDataSource('api');
      setLoading(false);
      setRefreshing(false);
      
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      
      if (showLoading) setLoading(false);
      setRefreshing(false);
      
      if (usuarios.length === 0) {
        Alert.alert(
          '❌ Error de Conexión', 
          'No se pudieron cargar los datos desde internet.\n\n' +
          'Error: ' + error.message + '\n\n' +
          '⚠️ Verifica tu conexión e intenta nuevamente.',
          [
            { text: 'Reintentar', onPress: () => obtenerUsuariosAPI(true) },
            { text: 'Cancelar', style: 'cancel' }
          ]
        );
      }
    }
  };

  const sincronizarDatos = async () => {
    if (!isConnected) {
      Alert.alert(
        '📡 Sin Conexión',
        'No se puede sincronizar sin conexión a internet.',
        [{ text: 'OK' }]
      );
      return;
    }

    Alert.alert(
      '🔄 Sincronizando',
      'Actualizando datos desde el servidor...',
      [{ text: 'OK' }]
    );
    
    await obtenerUsuariosAPI(true);
  };

  const onRefresh = () => {
    if (!isConnected) {
      Alert.alert(
        '📡 Sin Conexión',
        'No se puede actualizar sin conexión a internet.',
        [{ text: 'OK' }]
      );
      return;
    }
    setRefreshing(true);
    obtenerUsuariosAPI(false);
  };

  const limpiarTodo = () => {
    Alert.alert(
      '🗑️ Limpiar Todo',
      '¿Estás seguro? Esto eliminará:\n\n• Datos de usuarios\n• Preferencias guardadas\n• Caché completo',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar Todo',
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorage.clear();
              setUsuarios([]);
              setLastUpdate(null);
              setDataSource('');
              setPreferences({
                darkMode: true,
                notifications: true,
                autoSync: true,
                userName: '',
                itemsPerPage: 10,
                language: 'es'
              });
              
              Alert.alert('✅ Éxito', 'Todos los datos han sido eliminados');
              
              if (isConnected) {
                obtenerUsuariosAPI(true);
              }
            } catch (error) {
              Alert.alert('❌ Error', 'No se pudo limpiar el almacenamiento');
            }
          }
        }
      ]
    );
  };

  const verDetalles = (usuario) => {
    setSelectedUser(selectedUser?.id === usuario.id ? null : usuario);
  };

  const formatearFecha = (fecha) => {
    if (!fecha) return '';
    const ahora = new Date();
    const diff = Math.floor((ahora - fecha) / 1000);
    
    if (diff < 60) return 'Hace un momento';
    if (diff < 3600) return `Hace ${Math.floor(diff / 60)} min`;
    if (diff < 86400) return `Hace ${Math.floor(diff / 3600)} hrs`;
    return `Hace ${Math.floor(diff / 86400)} días`;
  };

  // Actualizar preferencia
  const actualizarPreferencia = (key, value) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
    setPreferencesChanged(true);
  };

  if (loading && usuarios.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5bc0eb" />
        <Text style={styles.loadingText}>Cargando datos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.title}>
              {showPreferences ? '⚙️ Preferencias' : '📋 Lista de Usuarios'}
            </Text>
            <Text style={styles.subtitle}>
              {showPreferences 
                ? 'Configura tu experiencia' 
                : `Total: ${usuarios.length} usuarios`}
            </Text>
          </View>
          
          <View style={styles.headerButtons}>
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={() => setShowPreferences(!showPreferences)}
            >
              <Text style={styles.iconButtonText}>
                {showPreferences ? '👥' : '⚙️'}
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={limpiarTodo}
            >
              <Text style={styles.iconButtonText}>🗑️</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.statusBar}>
          <View style={[
            styles.statusBadge, 
            isConnected ? styles.statusOnline : styles.statusOffline
          ]}>
            <Text style={styles.statusText}>
              {isConnected ? '🟢 En línea' : '🔴 Sin conexión'}
            </Text>
          </View>
          
          {!showPreferences && (
            <>
              <View style={[
                styles.statusBadge,
                dataSource === 'api' ? styles.statusApi : styles.statusCache
              ]}>
                <Text style={styles.statusText}>
                  {dataSource === 'api' ? '☁️ API' : '💾 Caché'}
                </Text>
              </View>
              
              {lastUpdate && (
                <Text style={styles.lastUpdateText}>
                  {formatearFecha(lastUpdate)}
                </Text>
              )}
            </>
          )}
        </View>
      </View>

      {showPreferences ? (
        <ScrollView style={styles.scrollView}>
          <View style={styles.preferencesContainer}>
            <View style={styles.preferenceCard}>
              <Text style={styles.preferenceTitle}>Nombre de Usuario</Text>
              <TextInput
                style={styles.input}
                placeholder="Tu nombre"
                placeholderTextColor="#9fb3c8"
                value={preferences.userName}
                onChangeText={(text) => actualizarPreferencia('userName', text)}
              />
            </View>

            <View style={styles.preferenceCard}>
              <View style={styles.preferenceRow}>
                <Text style={styles.preferenceLabel}>Notificaciones</Text>
                <Switch
                  value={preferences.notifications}
                  onValueChange={(value) => actualizarPreferencia('notifications', value)}
                  trackColor={{ false: '#767577', true: '#5bc0eb' }}
                  thumbColor={preferences.notifications ? '#fff' : '#f4f3f4'}
                />
              </View>
            </View>

            <View style={styles.preferenceCard}>
              <View style={styles.preferenceRow}>
                <Text style={styles.preferenceLabel}>Sincronización Automática</Text>
                <Switch
                  value={preferences.autoSync}
                  onValueChange={(value) => actualizarPreferencia('autoSync', value)}
                  trackColor={{ false: '#767577', true: '#5bc0eb' }}
                  thumbColor={preferences.autoSync ? '#fff' : '#f4f3f4'}
                />
              </View>
            </View>

            <View style={styles.preferenceCard}>
              <Text style={styles.preferenceTitle}>Items por Página</Text>
              <View style={styles.optionsRow}>
                {[5, 10, 20].map(num => (
                  <TouchableOpacity
                    key={num}
                    style={[
                      styles.optionButton,
                      preferences.itemsPerPage === num && styles.optionButtonActive
                    ]}
                    onPress={() => actualizarPreferencia('itemsPerPage', num)}
                  >
                    <Text style={[
                      styles.optionButtonText,
                      preferences.itemsPerPage === num && styles.optionButtonTextActive
                    ]}>
                      {num}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.preferenceCard}>
              <Text style={styles.preferenceTitle}>Idioma</Text>
              <View style={styles.optionsRow}>
                {[
                  { code: 'es', label: 'Español' },
                  { code: 'en', label: 'English' }
                ].map(lang => (
                  <TouchableOpacity
                    key={lang.code}
                    style={[
                      styles.optionButton,
                      preferences.language === lang.code && styles.optionButtonActive
                    ]}
                    onPress={() => actualizarPreferencia('language', lang.code)}
                  >
                    <Text style={[
                      styles.optionButtonText,
                      preferences.language === lang.code && styles.optionButtonTextActive
                    ]}>
                      {lang.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {preferencesChanged && (
              <TouchableOpacity 
                style={styles.saveButton}
                onPress={guardarPreferencias}
              >
                <Text style={styles.saveButtonText}>💾 Guardar Preferencias</Text>
              </TouchableOpacity>
            )}

            <View style={styles.infoCard}>
              <Text style={styles.infoTitle}>ℹInformación</Text>
              <Text style={styles.infoText}>
                • Las preferencias se guardan localmente{'\n'}
                • Funciona sin conexión a internet{'\n'}
                • Se valida la integridad de los datos{'\n'}
                • Sincroniza automáticamente cuando hay conexión
              </Text>
            </View>
          </View>
        </ScrollView>
      ) : (
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#5bc0eb"
              colors={['#5bc0eb']}
            />
          }
        >
          {usuarios.slice(0, preferences.itemsPerPage).map((usuario) => (
            <View key={usuario.id}>
              <TouchableOpacity
                style={[
                  styles.userCard,
                  selectedUser?.id === usuario.id && styles.userCardExpanded
                ]}
                onPress={() => verDetalles(usuario)}
              >
                <View style={styles.userHeader}>
                  <View style={styles.avatarContainer}>
                    <Text style={styles.avatarText}>
                      {usuario.name.charAt(0).toUpperCase()}
                    </Text>
                  </View>

                  <View style={styles.userMainInfo}>
                    <Text style={styles.userName}>{usuario.name}</Text>
                    <Text style={styles.userUsername}>@{usuario.username}</Text>
                    <Text style={styles.userEmail}>✉️ {usuario.email}</Text>
                  </View>

                  <Text style={styles.expandIcon}>
                    {selectedUser?.id === usuario.id ? '▼' : '▶'}
                  </Text>
                </View>

                {selectedUser?.id === usuario.id && (
                  <View style={styles.userDetails}>
                    <View style={styles.divider} />

                    <View style={styles.detailSection}>
                      <Text style={styles.sectionTitle}>Contacto</Text>
                      <Text style={styles.detailText}>Tel: {usuario.phone}</Text>
                      <Text style={styles.detailText}>Web: {usuario.website}</Text>
                    </View>

                    <View style={styles.detailSection}>
                      <Text style={styles.sectionTitle}>Dirección</Text>
                      <Text style={styles.detailText}>
                        {usuario.address.street}, {usuario.address.suite}
                      </Text>
                      <Text style={styles.detailText}>
                        {usuario.address.city} - {usuario.address.zipcode}
                      </Text>
                    </View>

                    <View style={styles.detailSection}>
                      <Text style={styles.sectionTitle}>Empresa</Text>
                      <Text style={styles.detailText}>{usuario.company.name}</Text>
                      <Text style={styles.detailTextItalic}>
                        "{usuario.company.catchPhrase}"
                      </Text>
                    </View>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          ))}

          {usuarios.length > preferences.itemsPerPage && (
            <Text style={styles.moreItemsText}>
              Mostrando {preferences.itemsPerPage} de {usuarios.length} usuarios
            </Text>
          )}

          {isConnected && (
            <TouchableOpacity 
              style={styles.syncButton}
              onPress={sincronizarDatos}
            >
              <Text style={styles.syncButtonText}>🔄 Sincronizar con Servidor</Text>
            </TouchableOpacity>
          )}

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              {isConnected 
                ? 'Desliza hacia abajo para actualizar' 
                : '📡 Sin conexión - Usando datos guardados'}
            </Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
}