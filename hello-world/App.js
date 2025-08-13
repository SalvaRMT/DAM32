import { Text, View, Image } from 'react-native';
import styles from './styles/styles';

export default App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola mundo</Text>
      
      <View style={styles.imageContainer}>
        <Image 
          source={require('./assets/Kyougen.jpg')} 
          style={styles.centeredImage}
          resizeMode="contain"
        />
      </View>
      
      <Text style={styles.subtitle}>
        Hola, soy Salva y esta es mi primera app en React Native
      </Text>
    </View>
  );
};


/*import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/styles';

export default App = () =>{
  return (
    <View style={styles.container}>
      <view style={styles.box}>
        <Text style={styles.title}>webos digo hola mundo!</Text>
      </view>
      <view style={styles.box}>
        <Text style={styles.title}>webos digo hola mundo!</Text>
      </view>
      <Text>webos digo hola mundo!</Text>
    </View>
  )
}
/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>webos digo hola mundo!</Text>
    </View>
  );
}*/

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
