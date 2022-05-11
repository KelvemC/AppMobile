import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from "react";
export default function Perfil(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <View style = {{width: "80%", margin: 40, alignContent: 'center', justifyContent: 'center'}}>
            
            <Text style = {estilos.title}>Login</Text>
            
            <Text> Email: </Text>
            <TextInput placeholder="exemplo: nome@gmail.com" style = {estilos.inserir}
            onChangeText = {email => setEmail(email)}
            />
            <Text> Senha: </Text>
            <TextInput placeholder="Insira uma senha" style = {estilos.inserir}
              onChangeText = {senha => setSenha(senha)}
            secureTextEntry = {true}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      color: "#f50",
      textAlign: 'center',
      fontWeight: 'bold',
    },
    inserir: {
        borderWidth: 2,
        padding: 7,
        margin: 4,
        borderRadius: 5,
       
        
    },
    
});