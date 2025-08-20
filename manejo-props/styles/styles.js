import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1419', 
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 50,
    paddingHorizontal: 20, 
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a9eff', 
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textShadowColor: '#1e2a3a',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  inputContainer: {
    backgroundColor: '#1e2a3a', 
    padding: 20,
    elevation: 10,
    shadowColor: '#4a9eff',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderWidth: 2,
    borderColor: '#2d5aa0',
    width: '85%',
  },

  input: {
    backgroundColor: '#2d3748', 
    borderWidth: 2,
    borderColor: '#4a9eff',
    borderRadius: 15,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#b8d4f0', 
    fontWeight: 'bold',
  },

  counterContainer: {
    backgroundColor: '#1e2a3a',
    borderRadius: 25,
    padding: 30,
    elevation: 15,
    shadowColor: '#4a9eff',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    borderWidth: 3,
    borderColor: '#2d5aa0',
    minWidth: 200,
    alignItems: 'center',
  },

  counterText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#4a9eff',
    textShadowColor: '#1e2a3a',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 10,
  },

  button: {
    backgroundColor: '#2d5aa0', 
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    elevation: 8,
    shadowColor: '#4a9eff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    borderWidth: 2,
    borderColor: '#4a9eff',
    flex: 0.45, 
  },
  
  buttonDecrement: {
    backgroundColor: '#1e2a3a', 
    borderColor: '#7a9cc6', 
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default styles;