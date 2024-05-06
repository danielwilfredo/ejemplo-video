import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

//importacion de componenetes
import InputNumero from './src/components/InputNumero';
import BotonSumar from './src/components/BotonSumar';

export default function App() {
  //Codigo JS
    const [numero1, setNumero1]=useState(0)
    const [numero2, setNumero2]=useState(0)
    const [resultado, setResultado]=useState(0)

    const sumar=()=>{
      let suma=parseFloat(numero1)+parseFloat(numero2)
      setResultado(suma)
    }

    const multi=()=>{
      let multi=parseFloat(numero1)*parseFloat(numero2)
      setResultado(multi)
    }



  //codigo JS
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ejemplo React Native Expo Go</Text>
      
      
      <InputNumero
      label_numero='Numero 1:'
      valor_numero={numero1}
      set_valor_numero={setNumero1}
            />

<InputNumero
      label_numero='Numero 2:'
      valor_numero={numero2}
      set_valor_numero={setNumero2}
            />
      
      <BotonSumar
      label_boton='Sumatoria'
      accion_boton={sumar}
      />
            <BotonSumar
      label_boton='Multiplicacion'
      accion_boton={multi}
      />


      <Text style={{fontSize:20, fontWeight:'bold'}}>resultado: {resultado}</Text>
      <StatusBar style="auto" />
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
  titulo:{
    backgroundColor:'#BBBFFF', 
    padding:10, 
    borderRadius:5
  }, 
  contenedorInput:{
    backgroundColor:'lightblue', 
    padding:10, 
    margin:5, 
    width:'50%'
  }, 
  numero:{
    textDecorationLine:'underline'
  }, btnSumar:{
    backgroundColor:'#BBBFFF', 
    padding:10, 
    borderRadius:5
  }
});
