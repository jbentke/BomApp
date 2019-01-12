import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./components/HomeScreen.js"
import WeckerEinstellungen from "./components/WeckerEinstellungen.js"

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  WeckerScreen: WeckerEinstellungen,
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
