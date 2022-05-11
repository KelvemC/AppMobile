import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useState } from 'react';


export default function Cadastro({route}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style = {{width: "80%", margin: 40, alignContent: 'center', justifyContent: 'center'}}>
      <Text style = {estilos.title}>Cadastrado</Text>
  
      <Text> Nome: </Text>
      <TextInput placeholder="Insira seu nome" style = {estilos.inserir}
      onChangeText = {nome => setNome(nome)}
      />
      <Text> Email: </Text>
      <TextInput placeholder="exemplo: nome@gmail.com" style = {estilos.inserir}
      onChangeText = {email => setEmail(email)}
      />
      <Text> Senha: </Text>
      <TextInput placeholder="Insira uma senha" style = {estilos.inserir}
      onChangeText = {senha => setSenha(senha)}
      secureTextEntry = {true}
      />
      <Text>{'\n'}</Text>

      <Button 
      title="Clique aqui"
      color={"#f50"}
      onPress={() => alert("O usuário " + nome + " foi cadastrado com sucesso!")}
      />
      </View>
  );
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
  formIMG: {
    padding: 2,
    width: 50,
    height: 50,
  },
  
});