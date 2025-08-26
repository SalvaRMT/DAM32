import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from './styles/styles';
import React, { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');
  const [taskCounter, setTaskCounter] = useState(0);

  const addTask = () => {
    if (inputText.trim() !== '') {
      const newTask = {
        id: taskCounter,
        text: inputText.trim(),
        completed: false
      };
      setTasks([...tasks, newTask]);
      setInputText('');
      setTaskCounter(taskCounter + 1);
    } else {
      Alert.alert('Error', 'Por favor ingresa una tarea válida');
    }
  };

  const deleteTask = (taskId) => {
    Alert.alert(
      'Eliminar Tarea',
      '¿Estás seguro que deseas eliminar esta tarea?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            const updatedTasks = tasks.filter(task => task.id !== taskId);
            setTasks(updatedTasks);
          },
        },
      ]
    );
  };

  const toggleTaskComplete = (taskId) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);
  };

  const clearAllTasks = () => {
    if (tasks.length === 0) {
      Alert.alert('Lista vacía', 'No hay tareas para eliminar');
      return;
    }
    
    Alert.alert(
      'Limpiar Lista',
      '¿Estás seguro que deseas eliminar todas las tareas?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Limpiar Todo',
          style: 'destructive',
          onPress: () => {
            setTasks([]);
            setTaskCounter(0);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tareas</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ingresa tu nueva tarea..."
          placeholderTextColor="#7a9cc6"
          value={inputText}
          onChangeText={setInputText}
          style={styles.input}
          multiline={false}
          maxLength={100}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.addButton]} 
          onPress={addTask}
        >
          <Text style={styles.buttonText}>+ Agregar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.clearButton]} 
          onPress={clearAllTasks}
        >
          <Text style={styles.buttonText}>🗑 Limpiar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasksCountContainer}>
        <Text style={styles.tasksCountText}>
          Total: {tasks.length} tarea{tasks.length !== 1 ? 's' : ''}
        </Text>
        <Text style={styles.tasksCompletedText}>
          Completadas: {tasks.filter(task => task.completed).length}
        </Text>
      </View>

      <ScrollView style={styles.tasksContainer} showsVerticalScrollIndicator={false}>
        {tasks.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>🎯</Text>
            <Text style={styles.emptyMessage}>No hay tareas agregadas</Text>
            <Text style={styles.emptySubMessage}>¡Agrega tu primera tarea!</Text>
          </View>
        ) : (
          tasks.map((task) => (
            <View key={task.id} style={styles.taskItem}>
              <TouchableOpacity 
                style={styles.taskContent}
                onPress={() => toggleTaskComplete(task.id)}
              >
                <View style={styles.taskCheckbox}>
                  <Text style={styles.checkboxText}>
                    {task.completed ? '✅' : '⭕'}
                  </Text>
                </View>
                <Text 
                  style={[
                    styles.taskText, 
                    task.completed && styles.completedTaskText
                  ]}
                  numberOfLines={2}
                >
                  {task.text}
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => deleteTask(task.id)}
              >
                <Text style={styles.deleteButtonText}>🗑</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}