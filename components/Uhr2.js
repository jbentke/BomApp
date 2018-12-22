import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BinaryDigit from './BinaryDigit.js'

export default class Clock2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      digits: [[], [], []]
    }
  }

  componentDidMount() {
    setInterval(function() {
      const date = new Date();
      const newDigits = [
        numberAsBinaryArrayPair(date.getHours()),
        numberAsBinaryArrayPair(date.getMinutes()),
        numberAsBinaryArrayPair(date.getSeconds())
      ];
      this.setState({
        digits: newDigits
      });
    }.bind(this), 1000);
  }

  render() {

    return <View >
        <View style={{
        flex: 1,
        flexDirection: 'row'
      }}>
         <BinaryDigit digitArray={this.state.digits[2][0]} />
         <BinaryDigit digitArray={this.state.digits[2][1]} />
        </View>
      </View>;
  }
}


function numberToBinary(base10Number) {
  const base2Values = [8, 4, 2, 1];
  let output = [0, 0, 0, 0];
  let remainder = base10Number;

  base2Values.forEach((val, idx) => {
    const left = remainder - val;

    if (left >= 0) {
      output[idx] = 1;
      remainder = left
    }
  });

  return output;
}

function numberAsBinaryArrayPair(number) {
  const pair = [];
  if (number < 10) {
    pair[0] = numberToBinary();
    pair[1] = numberToBinary(number);
  } else {
    const numberAsArray = String(number).split('');
    pair[0] = numberToBinary(parseInt(numberAsArray[0], 10));
    pair[1] = numberToBinary(parseInt(numberAsArray[1], 10));
  }

  return pair;
}