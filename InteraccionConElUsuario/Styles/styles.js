import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1419', // Azul oscuro base
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4a9eff', // Azul brillante
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textShadowColor: '#1e2a3a',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  subtitle: {
    fontSize: 14,
    color: '#7a9cc6',
    textAlign: 'center',
    marginBottom: 30,
    fontStyle: 'italic',
  },

  formContainer: {
    backgroundColor: '#1e2a3a', // Azul gris oscuro
    borderRadius: 25,
    padding: 20,
    elevation: 10,
    shadowColor: '#4a9eff',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderWidth: 2,
    borderColor: '#2d5aa0',
  },

  inputGroup: {
    marginBottom: 20,
  },

  label: {
    color: '#b8d4f0', // Azul claro
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  input: {
    backgroundColor: '#2d3748', // Azul más claro para el input
    borderWidth: 2,
    borderColor: '#4a9eff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#f1faee', // Texto claro
    fontWeight: '500',
  },

  registerButton: {
    backgroundColor: '#2d5aa0', // Azul medio
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 15,
    elevation: 8,
    shadowColor: '#4a9eff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    borderWidth: 2,
    borderColor: '#4a9eff',
    marginTop: 10,
    marginBottom: 15,
  },

  registerButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },

  clearButton: {
    backgroundColor: '#1e2a3a',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#7a9cc6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    borderWidth: 2,
    borderColor: '#7a9cc6',
  },

  clearButtonText: {
    color: '#b8d4f0',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default styles;