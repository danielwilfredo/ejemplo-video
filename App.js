import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { List, Checkbox } from 'react-native-paper';

import Input from './src/components/Input';

export default function App() {
  // Estado para el valor de la tarea y la lista de tareas
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  // Función para agregar una nueva tarea a la lista
  const addTarea = () => {
    if (tarea.trim() !== '') {
      setTareas([...tareas, { id: Date.now(), titulo: tarea, completado: false }]);
      setTarea('');
    }
  };

  // Función para marcar una tarea como completada
  const completarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completado: !tarea.completado } : tarea
      )
    );
  };

  // Función para eliminar una tarea de la lista
  const deleteTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  // Componente de la aplicación
  return (
    <View style={styles.container}>
      {/* Entrada de texto para agregar una nueva tarea */}
      <Input
      label_numero='Agregar Tarea'
      valor_numero={tarea}
      set_valor_numero={setTarea}
      />
      {/* Botón para agregar una nueva tarea */}
      <TouchableOpacity
        style={styles.btn}
        onPress={addTarea}
      >
        <Text style={styles.texto}>Añadir Tarea</Text>
      </TouchableOpacity>
      {/* Lista de tareas */}
      <FlatList
        data={tareas}
        renderItem={({ item }) => (
          <List.Item
            title={item.titulo}
            onPress={() => completarTarea(item.id)} // Marca una tarea como completada cuando se presiona
            onLongPress={()=>deleteTarea(item.id)} // Elimina una tarea cuando se mantiene presionada
            left={() => (
              <Checkbox
                status={item.completado ? 'checked' : 'unchecked'} // Estado del checkbox basado en si la tarea está completada
                onPress={() => completarTarea(item.id)}
              />
            )}
            right={() => (
              <List.Icon
                icon="delete"
                onPress={() => deleteTarea(item.id)} // Elimina una tarea cuando se presiona el icono de eliminar
              />
            )}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

// Estilos de la aplicación
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:45
  },
  texto:{
    color:'white', 
    fontSize:15, 
    textTransform:'uppercase', 
    fontWeight:'800'
  }, 
  contenedorInput:{
    backgroundColor:'lightblue', 
    padding:10, 
    margin:5, 
    width:'50%'
  }, 
  input:{
  width:'50%', 
  backgroundColor:'#d9e3f0', 
  padding:5, 
  margin:5
  }, 
  btn:{
    backgroundColor:'#00428f', 
    padding:10, 
    borderRadius:5
  }
});
