import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function BotonSumar({label_boton, accion_boton}) {

    return(
        <>
              <TouchableOpacity
      style={styles.btnSumar}
      onPress={accion_boton}>
        <Text>{label_boton}</Text>
      </TouchableOpacity>
        </>
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
      borderRadius:5, 
      margin:5
    }
  });