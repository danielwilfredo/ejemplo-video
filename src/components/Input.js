import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Input({label_numero, valor_numero, set_valor_numero}) {

    return(
        <>
 <View style={styles.contenedorInput}>
      <Text style={styles.numero}>{label_numero}</Text>
      <TextInput
      placeholder={label_numero}
      value={valor_numero}
      onChangeText={set_valor_numero}
      keyboardType='number-pad'/>
            </View>
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
      textTransform:'uppercase', 
      backgroundColor:'#FFF',
      padding:2, 
      width:'75%', 
      fontWeight:'bold'
    }, btnSumar:{
      backgroundColor:'#BBBFFF', 
      padding:10, 
      borderRadius:5
    }
  });