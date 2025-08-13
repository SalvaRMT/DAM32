import { Text, View, Image } from 'react-native';
import styles from './styles/styles';

export default App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Holo yo soy Salva</Text>
      
      <View style={styles.imageContainer}>
        <Image 
          source={require('./assets/Foto.jpg')} 
          style={styles.centeredImage}
          resizeMode="cover" 
        />
      </View>
      
      <Text style={styles.subtitle}>
        Hola, soy Alan Salvador Rojas Piña, mucho gusto. 
        Soy originario del municipio de Huimilpan, Querétaro. 
        Tengo 21 años y actualmente estudio la carrera de Ingeniería de software. 
        Con relación a mis gustos, la música me encanta, mi cantante favorita es Ado. 
        También me gustan los juegos gacha y los shooters. 
        Los fines de semana si no trabajo me quedo en casa a ayudar a mi mamá con los labores del hogar. 
        Y si acabamos temprano pues ya me pongo a jugar mientras escucho música.
        PD: EN LA FOTO SOY EL DE NEGRO ... QUE HOY EN DIA MUCHOS HOMBRES SE DISFRAZAN DE MUJERES
        SOLO NO TENIA UNA FOTO MIA SOLO ASI QUE PUSE ESA.
      </Text>
    </View>
  );
};
