import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from './Styles/styles';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarFecha = (fecha) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(fecha);
  };

  const validarTelefono = (tel) => {
    const regex = /^\d{10}$/;
    return regex.test(tel);
  };

  const limpiarFormulario = () => {
    setNombre('');
    setApellido('');
    setCorreo('');
    setFechaNacimiento('');
    setTelefono('');
    setPassword('');
    setConfirmarPassword('');
  };

  const handleRegistro = () => {
    // Validar campos vacíos
    if (!nombre.trim()) {
      Alert.alert('Campo Vacío', 'Por favor ingresa tu nombre', [{ text: 'OK' }]);
      return;
    }

    if (!apellido.trim()) {
      Alert.alert('Campo Vacío', 'Por favor ingresa tu apellido', [{ text: 'OK' }]);
      return;
    }

    if (!correo.trim()) {
      Alert.alert('Campo Vacío', 'Por favor ingresa tu correo electrónico', [{ text: 'OK' }]);
      return;
    }

    if (!validarEmail(correo)) {
      Alert.alert('Correo Inválido', 'Por favor ingresa un correo electrónico válido', [{ text: 'OK' }]);
      return;
    }

    if (!fechaNacimiento.trim()) {
      Alert.alert('Campo Vacío', 'Por favor ingresa tu fecha de nacimiento', [{ text: 'OK' }]);
      return;
    }

    if (!validarFecha(fechaNacimiento)) {
      Alert.alert('Fecha Inválida', 'Por favor ingresa una fecha válida (DD/MM/AAAA)', [{ text: 'OK' }]);
      return;
    }

    if (!telefono.trim()) {
      Alert.alert('Campo Vacío', 'Por favor ingresa tu teléfono', [{ text: 'OK' }]);
      return;
    }

    if (!validarTelefono(telefono)) {
      Alert.alert('Teléfono Inválido', 'Por favor ingresa un teléfono válido de 10 dígitos', [{ text: 'OK' }]);
      return;
    }

    if (!password.trim()) {
      Alert.alert('Campo Vacío', 'Por favor ingresa una contraseña', [{ text: 'OK' }]);
      return;
    }

    if (password.length < 6) {
      Alert.alert('Contraseña Débil', 'La contraseña debe tener al menos 6 caracteres', [{ text: 'OK' }]);
      return;
    }

    if (!confirmarPassword.trim()) {
      Alert.alert('Campo Vacío', 'Por favor confirma tu contraseña', [{ text: 'OK' }]);
      return;
    }

    if (password !== confirmarPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden', [{ text: 'OK' }]);
      return;
    }

    // Si todas las validaciones pasan
    Alert.alert(
      'Registro Exitoso',
      `Bienvenido ${nombre} ${apellido}!\nTu cuenta ha sido creada correctamente.`,
      [
        {
          text: 'Aceptar',
          onPress: () => limpiarFormulario(),
          style: 'default'
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Registro de Usuario</Text>
        <Text style={styles.subtitle}>Completa tus datos para crear una cuenta</Text>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu nombre"
              placeholderTextColor="#7a9cc6"
              value={nombre}
              onChangeText={setNombre}
              maxLength={50}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Apellido</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu apellido"
              placeholderTextColor="#7a9cc6"
              value={apellido}
              onChangeText={setApellido}
              maxLength={50}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo Electrónico</Text>
            <TextInput
              style={styles.input}
              placeholder="ejemplo@correo.com"
              placeholderTextColor="#7a9cc6"
              value={correo}
              onChangeText={setCorreo}
              keyboardType="email-address"
              autoCapitalize="none"
              maxLength={100}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Fecha de Nacimiento</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/AAAA"
              placeholderTextColor="#7a9cc6"
              value={fechaNacimiento}
              onChangeText={setFechaNacimiento}
              keyboardType="numeric"
              maxLength={10}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Teléfono</Text>
            <TextInput
              style={styles.input}
              placeholder="10 dígitos"
              placeholderTextColor="#7a9cc6"
              value={telefono}
              onChangeText={setTelefono}
              keyboardType="phone-pad"
              maxLength={10}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Mínimo 6 caracteres"
              placeholderTextColor="#7a9cc6"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              maxLength={50}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirmar Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Repite tu contraseña"
              placeholderTextColor="#7a9cc6"
              value={confirmarPassword}
              onChangeText={setConfirmarPassword}
              secureTextEntry
              maxLength={50}
            />
          </View>

          <TouchableOpacity 
            style={styles.registerButton}
            onPress={handleRegistro}
          >
            <Text style={styles.registerButtonText}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.clearButton}
            onPress={limpiarFormulario}
          >
            <Text style={styles.clearButtonText}>Limpiar Formulario</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}