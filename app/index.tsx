import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import Boton from '../app-temp/Components/Boton'

const index = () => {
    const ruta= useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Login...</Text>
        <Boton onPress={()=>ruta.push('./(tabs)/')} titulo='Ir a Home'/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EDE0D4',
        alignItems:'center',
        justifyContent:'center'
    },
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        color:'#4B2E1E'
    },
    link:{
        color:'#4B2E1E',
        fontSize:20
    }
})