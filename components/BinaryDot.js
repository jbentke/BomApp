import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  pip: {
    width: 17,
    height: 17,
    margin: 7,
    backgroundColor: '#525252',
  },

  pipOn: {
    width: 17,
    height: 17,
    margin: 7,
    backgroundColor: '#48d8b8',
  }
})

export default class BinaryDot extends React.Component {
  //render einen farbigen punkt wenn this.props.number === 1 sonst render weißen punkt
  render() {
    return <View>
        {this.props.number === 1 ? <View style={styles.pipOn}/> : <View style={styles.pip}/>}
    </View>
  }
}

