import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import styles from './styles/styles';

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsuarios(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'No se pudieron cargar los usuarios. Intenta nuevamente.', [
        { text: 'Reintentar', onPress: () => obtenerUsuarios() },
        { text: 'Cancelar', style: 'cancel' }
      ]);
    }
  };

  const verDetalles = (usuario) => {
    setSelectedUser(selectedUser?.id === usuario.id ? null : usuario);
  };

  const llamarUsuario = (phone) => {
    Alert.alert('Llamar', `¿Deseas llamar al ${phone}?`, [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Llamar', onPress: () => console.log('Llamando...') }
    ]);
  };

  const enviarEmail = (email) => {
    Alert.alert('Email', `Enviando correo a ${email}`, [{ text: 'OK' }]);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a9eff" />
        <Text style={styles.loadingText}>Cargando usuarios...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📋 Lista de Usuarios</Text>
        <Text style={styles.subtitle}>Total: {usuarios.length} usuarios registrados</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {usuarios.map((usuario) => (
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
                    <Text style={styles.sectionTitle}>📞 Contacto</Text>
                    <TouchableOpacity onPress={() => llamarUsuario(usuario.phone)}>
                      <Text style={styles.detailText}>Teléfono: {usuario.phone}</Text>
                    </TouchableOpacity>
                    <Text style={styles.detailText}>Website: {usuario.website}</Text>
                  </View>

                  <View style={styles.detailSection}>
                    <Text style={styles.sectionTitle}>📍 Dirección</Text>
                    <Text style={styles.detailText}>
                      {usuario.address.street}, {usuario.address.suite}
                    </Text>
                    <Text style={styles.detailText}>
                      {usuario.address.city} - {usuario.address.zipcode}
                    </Text>
                  </View>

                  <View style={styles.detailSection}>
                    <Text style={styles.sectionTitle}>🏢 Empresa</Text>
                    <Text style={styles.detailText}>{usuario.company.name}</Text>
                    <Text style={styles.detailTextItalic}>
                      "{usuario.company.catchPhrase}"
                    </Text>
                  </View>

                  <View style={styles.actionButtons}>
                    <TouchableOpacity
                      style={styles.actionButton}
                      onPress={() => llamarUsuario(usuario.phone)}
                    >
                      <Text style={styles.actionButtonText}>📞 Llamar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.actionButton, styles.actionButtonEmail]}
                      onPress={() => enviarEmail(usuario.email)}
                    >
                      <Text style={styles.actionButtonText}>✉️ Email</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={styles.reloadButton} onPress={obtenerUsuarios}>
          <Text style={styles.reloadButtonText}>🔄 Recargar Usuarios</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
