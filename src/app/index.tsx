import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (

    <View style={styles.container}>

      <View style={styles.container}>
        <Text style={styles.login}>Login</Text>
        <TextInput placeholder='Username' style={styles.input} ></TextInput>
        <TextInput placeholder='Password' style={styles.input} ></TextInput>
        <Button onPress={()=>{alert("login press ho rha!!!")}} title='Login' color='red' />
      </View>

    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    width:'100%',
    backgroundColor:'lightgreen',
  },
  login:{
    fontSize:20,
    color:'green',
  }, 
  input:{
    width:200,
    height:40,
    marginVertical:5,
    borderColor:'blue',
    borderWidth:1,
    borderRadius:5,
    padding:8,
  },
})
