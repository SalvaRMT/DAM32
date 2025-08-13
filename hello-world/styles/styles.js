import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e', 
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 50,
  },
  
  title: {
    color: '#ff6b9d',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 3,
    textShadowColor: '#16213e',
    textShadowOffset: { width: 2, height: 2 },
    marginBottom: 20,
  },

  imageContainer: {
    backgroundColor: '#16213e', 
    borderRadius: 20,
    padding: 15,
    elevation: 10, 
    shadowColor: '#ff6b9d',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderWidth: 2,
    borderColor: '#c44569', 
    width: 280, 
    height: 380, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  centeredImage: {
    width: 250,
    height: 350, 
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#ff6b9d',
  },

  subtitle: {
    color: '#eee2dc', 
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    paddingHorizontal: 20,
    lineHeight: 22,
    marginTop: 20,
  },

  box: {
    backgroundColor: '#c44569', 
    width: '100%',
    height: 100,
    justifyContent: 'flex-end',
  },

  boxImage: {
    width: 100,
    height: 100,
    backgroundColor: '#16213e',
    borderRadius: 10,
  },
});

export default styles;