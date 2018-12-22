import React, { Component } from 'react'
import BinaryDot from './BinaryDot.js'
import { View, Text } from 'react-native'

export default class BinaryDigit extends React.Component {
  render() {
    return <View>
        {this.props.digitArray ? this.props.digitArray.map((digit, idx) => <BinaryDot number={digit} key={idx}/>) : null}
    </View>
  }
}