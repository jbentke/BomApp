import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Uhr from './components/Uhr.js'
import WeckerElement from './components/WeckerElement.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Uhr />
        <WeckerElement />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
