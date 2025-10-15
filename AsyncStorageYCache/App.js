import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  ActivityIndicator, 
  Alert,
  RefreshControl,
  Animated
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import styles from './styles/styles';

const STORAGE_KEYS = {
  CRYPTO_DATA: '@crypto_prices',
  TIMESTAMP: '@crypto_timestamp'
};

const API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,solana&vs_currencies=usd&include_24hr_change=true';

const CRYPTO_INFO = {
  bitcoin: { name: 'Bitcoin', symbol: 'BTC', emoji: '₿', color: '#F7931A' },
  ethereum: { name: 'Ethereum', symbol: 'ETH', emoji: '⟠', color: '#627EEA' },
  dogecoin: { name: 'Dogecoin', symbol: 'DOGE', emoji: 'Ð', color: '#C2A633' },
  solana: { name: 'Solana', symbol: 'SOL', emoji: '◎', color: '#14F195' }
};

export default function App() {
  const [cryptoData, setCryptoData] = useState({});
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [dataSource, setDataSource] = useState('');
  const [lastUpdate, setLastUpdate] = useState(null);
  const [error, setError] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    inicializarApp();

    const unsubscribe = NetInfo.addEventListener(state => {
      const connected = state.isConnected && state.isInternetReachable !== false;
      setIsConnected(connected);
      
      if (connected && dataSource === 'cache') {

        obtenerPreciosAPI(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (Object.keys(cryptoData).length > 0) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }
  }, [cryptoData]);

  const inicializarApp = async () => {
    try {
      setLoading(true);
      setError(null);

      const cachedData = await cargarDelCache();
      
      if (cachedData) {
        setCryptoData(cachedData.data);
        setLastUpdate(cachedData.timestamp);
        setDataSource('cache');
        setLoading(false);

        if (isConnected) {
          obtenerPreciosAPI(false);
        }
      } else {

        await obtenerPreciosAPI(true);
      }
    } catch (err) {
      console.error('Error al inicializar:', err);
      setLoading(false);
      setError('Error al cargar la aplicación');
    }
  };

  const cargarDelCache = async () => {
    try {
      const dataJSON = await AsyncStorage.getItem(STORAGE_KEYS.CRYPTO_DATA);
      const timestamp = await AsyncStorage.getItem(STORAGE_KEYS.TIMESTAMP);
      
      if (dataJSON && timestamp) {
        const data = JSON.parse(dataJSON);

        if (Object.keys(data).length > 0) {
          return {
            data,
            timestamp: new Date(timestamp)
          };
        }
      }
      return null;
    } catch (error) {
      console.error('Error al cargar del caché:', error);
      return null;
    }
  };

  const guardarEnCache = async (data) => {
    try {
      const timestamp = new Date().toISOString();
      await AsyncStorage.setItem(STORAGE_KEYS.CRYPTO_DATA, JSON.stringify(data));
      await AsyncStorage.setItem(STORAGE_KEYS.TIMESTAMP, timestamp);
      setLastUpdate(new Date(timestamp));
    } catch (error) {
      console.error('Error al guardar en caché:', error);
    }
  };

  const obtenerPreciosAPI = async (showLoading = true) => {
    if (!isConnected) {
      if (Object.keys(cryptoData).length === 0) {
        Alert.alert(
          '📡 Sin Conexión',
          'No hay conexión a internet y no hay datos guardados.\n\nConéctate para obtener los precios.',
          [{ text: 'OK' }]
        );
      }
      return;
    }

    try {
      if (showLoading) setLoading(true);
      setError(null);
      
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const data = await response.json();

      if (!data || Object.keys(data).length === 0) {
        throw new Error('Datos inválidos recibidos de la API');
      }

      await guardarEnCache(data);
      
      setCryptoData(data);
      setDataSource('api');
      setLoading(false);
      setRefreshing(false);
      
    } catch (error) {
      console.error('Error al obtener precios:', error);
      
      setError(error.message);
      if (showLoading) setLoading(false);
      setRefreshing(false);

      if (Object.keys(cryptoData).length === 0) {
        Alert.alert(
          '❌ Error de Conexión',
          `No se pudieron cargar los precios.\n\n${error.message}\n\nIntenta nuevamente.`,
          [
            { text: 'Reintentar', onPress: () => obtenerPreciosAPI(true) },
            { text: 'Cancelar', style: 'cancel' }
          ]
        );
      }
    }
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
    obtenerPreciosAPI(false);
  };

  const formatearPrecio = (precio) => {
    if (!precio) return '$0.00';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(precio);
  };

  const formatearCambio = (cambio) => {
    if (!cambio && cambio !== 0) return '0.00%';
    const signo = cambio >= 0 ? '+' : '';
    return `${signo}${cambio.toFixed(2)}%`;
  };


  const formatearTiempo = (fecha) => {
    if (!fecha) return '';
    const ahora = new Date();
    const diff = Math.floor((ahora - fecha) / 1000);
    
    if (diff < 60) return 'Hace un momento';
    if (diff < 3600) return `Hace ${Math.floor(diff / 60)} min`;
    if (diff < 86400) return `Hace ${Math.floor(diff / 3600)} hrs`;
    return `Hace ${Math.floor(diff / 86400)} días`;
  };

  const limpiarCache = () => {
    Alert.alert(
      '🗑️ Limpiar Caché',
      '¿Deseas eliminar todos los datos guardados?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorage.multiRemove([STORAGE_KEYS.CRYPTO_DATA, STORAGE_KEYS.TIMESTAMP]);
              setCryptoData({});
              setLastUpdate(null);
              setDataSource('');
              Alert.alert('✅ Éxito', 'Caché eliminado correctamente');
              if (isConnected) {
                obtenerPreciosAPI(true);
              }
            } catch (error) {
              Alert.alert('❌ Error', 'No se pudo eliminar el caché');
            }
          }
        }
      ]
    );
  };

  const calcularValorTotal = () => {
    const valores = Object.values(cryptoData);
    if (valores.length === 0) return 0;
    return valores.reduce((sum, crypto) => sum + (crypto.usd || 0), 0);
  };

  if (loading && Object.keys(cryptoData).length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.loadingContent}>
          <Text style={styles.loadingEmoji}>📈</Text>
          <ActivityIndicator size="large" color="#FFD700" />
          <Text style={styles.loadingText}>Cargando precios...</Text>
          <Text style={styles.loadingSubtext}>Conectando con CoinGecko API</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.title}>💰 Crypto Tracker</Text>
            <Text style={styles.subtitle}>Precios en tiempo real</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.cacheButton}
            onPress={limpiarCache}
          >
            <Text style={styles.cacheButtonText}>🗑️</Text>
          </TouchableOpacity>
        </View>

        {/* Barra de estado */}
        <View style={styles.statusBar}>
          <View style={[
            styles.statusBadge,
            isConnected ? styles.statusOnline : styles.statusOffline
          ]}>
            <Text style={styles.statusText}>
              {isConnected ? '🟢 En línea' : '🔴 Offline'}
            </Text>
          </View>

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
              {formatearTiempo(lastUpdate)}
            </Text>
          )}
        </View>

        {/* Resumen de mercado */}
        {Object.keys(cryptoData).length > 0 && (
          <View style={styles.marketSummary}>
            <Text style={styles.marketLabel}>Valor Total Mostrado</Text>
            <Text style={styles.marketValue}>
              {formatearPrecio(calcularValorTotal())}
            </Text>
          </View>
        )}
      </View>

      {/* Mensaje de error si existe */}
      {error && dataSource === 'cache' && (
        <View style={styles.errorBanner}>
          <Text style={styles.errorText}>
            ⚠️ Error al actualizar: {error}
          </Text>
        </View>
      )}

      {/* Lista de criptomonedas */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#FFD700"
            colors={['#FFD700', '#FFA500']}
          />
        }
      >
        {Object.keys(cryptoData).length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>📊</Text>
            <Text style={styles.emptyTitle}>No hay datos disponibles</Text>
            <Text style={styles.emptyText}>
              {isConnected 
                ? 'Desliza hacia abajo para cargar los precios' 
                : 'Conéctate a internet para obtener los precios'}
            </Text>
            {isConnected && (
              <TouchableOpacity 
                style={styles.retryButton}
                onPress={() => obtenerPreciosAPI(true)}
              >
                <Text style={styles.retryButtonText}>🔄 Cargar Precios</Text>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <Animated.View style={{ opacity: fadeAnim }}>
            {Object.entries(cryptoData).map(([id, data]) => {
              const info = CRYPTO_INFO[id];
              const cambio = data.usd_24h_change || 0;
              const esPositivo = cambio >= 0;

              return (
                <View key={id} style={styles.cryptoCard}>
                  {/* Header de la tarjeta */}
                  <View style={styles.cryptoHeader}>
                    <View style={[
                      styles.cryptoIcon,
                      { backgroundColor: info.color + '20' }
                    ]}>
                      <Text style={[styles.cryptoEmoji, { color: info.color }]}>
                        {info.emoji}
                      </Text>
                    </View>

                    <View style={styles.cryptoInfo}>
                      <Text style={styles.cryptoName}>{info.name}</Text>
                      <Text style={styles.cryptoSymbol}>{info.symbol}</Text>
                    </View>

                    <View style={[
                      styles.changeBadge,
                      esPositivo ? styles.changeBadgePositive : styles.changeBadgeNegative
                    ]}>
                      <Text style={styles.changeText}>
                        {esPositivo ? '📈' : '📉'} {formatearCambio(cambio)}
                      </Text>
                    </View>
                  </View>

                  {/* Precio */}
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceLabel}>Precio Actual</Text>
                    <Text style={styles.priceValue}>
                      {formatearPrecio(data.usd)}
                    </Text>
                  </View>

                  {/* Cambio en 24h */}
                  <View style={styles.statsRow}>
                    <View style={styles.statItem}>
                      <Text style={styles.statLabel}>Cambio 24h</Text>
                      <Text style={[
                        styles.statValue,
                        esPositivo ? styles.statValuePositive : styles.statValueNegative
                      ]}>
                        {formatearCambio(cambio)}
                      </Text>
                    </View>

                    <View style={styles.statItem}>
                      <Text style={styles.statLabel}>Tendencia</Text>
                      <Text style={styles.statValue}>
                        {esPositivo ? '🚀 Alcista' : '📉 Bajista'}
                      </Text>
                    </View>
                  </View>

                  {/* Barra de progreso visual */}
                  <View style={styles.progressBarContainer}>
                    <View 
                      style={[
                        styles.progressBar,
                        esPositivo ? styles.progressBarPositive : styles.progressBarNegative,
                        { width: `${Math.min(Math.abs(cambio) * 10, 100)}%` }
                      ]}
                    />
                  </View>
                </View>
              );
            })}

            {/* Botón de recarga */}
            {isConnected && (
              <TouchableOpacity 
                style={styles.reloadButton}
                onPress={() => obtenerPreciosAPI(true)}
              >
                <Text style={styles.reloadButtonText}>🔄 Actualizar Precios</Text>
              </TouchableOpacity>
            )}

            {/* Footer informativo */}
            <View style={styles.footer}>
              <Text style={styles.footerTitle}>ℹ️ Información</Text>
              <Text style={styles.footerText}>
                • Los precios se actualizan automáticamente{'\n'}
                • Desliza hacia abajo para refrescar{'\n'}
                • Funciona sin conexión con datos en caché{'\n'}
                • Datos proporcionados por CoinGecko API
              </Text>
              {lastUpdate && (
                <Text style={styles.footerTimestamp}>
                  Última actualización: {lastUpdate.toLocaleString('es-MX', {
                    day: '2-digit',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </Text>
              )}
            </View>
          </Animated.View>
        )}
      </ScrollView>
    </View>
  );
}