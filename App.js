/*
This is the entry point of the app. In order for react-native to know at what component you are 
currently, we use the "react-navigation" which keeps track of what screen we are at.
*/


import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./components/HomeScreen.js"
import WeckerEinstellungen from "./components/WeckerEinstellungen.js"


//this is a variable that stores all Screens we have
const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  WeckerScreen: WeckerEinstellungen,
});

//this is a wrapper class that takes the AppNavigator and "wrapps" a class around it so it can be
//used like a component later
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    //here we render our root element that we wrapped above, it will be the start point of what we see
    return <AppContainer />;
  }
}
