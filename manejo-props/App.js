import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/styles';
import React, { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  } 

  const handleChange = (value) => {
    const num = Number(value);
    if (!isNaN(num)) {
      setCounter(num);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Primer Contador</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ingrese un número"
          placeholderTextColor="#7a9cc6"
          keyboardType="numeric"
          value={counter.toString()}
          onChangeText={handleChange}
          style={styles.input}
        />
      </View>

      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.buttonDecrement]} 
          onPress={decrement}
        >
          <Text style={styles.buttonText}>- 1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={increment}
        >
          <Text style={styles.buttonText}>+ 1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//codigo de clase que se dejara asi a modo de revisar los cambios hechos
/*
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  } 

  const hadleChange = (value) => {
    setCounter(counter)
  }

  return (
    <View style={styles.container}>
      <Text>Mi primer contador en react native</Text>
      <TextInput placeholder="Ingrese un numero" keyboardType="numeric" value={counter}/>
      <Text>Contador: {counter}</Text>
      <Button title="Incrementar numero" onPress={() => {
        setCounter(counter + 1);
        console.log(counter);
      }} />
      <Button title="Bajar numero" onPress={() => {
        setCounter(counter - 1);
        console.log(counter);
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/