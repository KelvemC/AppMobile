import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNavigationContainerRef, DrawerRouter, NavigationContainer } from '@react-navigation/native';
import {create, createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createNativeStackNavigator();
const Tab  = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';
import Perfil from './src/pages/Perfil';
import Login from './src/pages/Login';
import CustomDrawer from './src/pages/CustomDrawer';


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name = "Home" component={Home}/>
        <Drawer.Screen name = "Login" component={Login}/>
        <Drawer.Screen name = "Cadastro" component={Cadastro}/>
        <Drawer.Screen name = "Perfil" component={Perfil}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}