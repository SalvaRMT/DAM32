import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1419', 
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 40,
  },
  
  title: {
    color: '#4a9eff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 3,
    textShadowColor: '#1e2a3a',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 25,
  },

  imageContainer: {
    backgroundColor: '#1e2a3a',
    borderRadius: 25,
    padding: 20,
    elevation: 15, 
    shadowColor: '#4a9eff', 
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    borderWidth: 3,
    borderColor: '#2d5aa0', 
    width: 300, 
    height: 320, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  centeredImage: {
    width: 260, 
    height: 280, 
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#4a9eff', 
  },

  subtitle: {
    color: '#b8d4f0',
    fontSize: 15,
    textAlign: 'justify', 
    fontStyle: 'normal', 
    paddingHorizontal: 25,
    lineHeight: 20,
    marginTop: 20,
    fontWeight: '300', 
  },

  box: {
    backgroundColor: '#2d5aa0', 
    width: '100%',
    height: 100,
    justifyContent: 'flex-end',
  },

  boxImage: {
    width: 100,
    height: 100,
    backgroundColor: '#1e2a3a',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#4a9eff',
  },
});

export default styles;