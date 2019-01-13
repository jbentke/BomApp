/*
This is one Wecker. It renders the time a wecker goes of as well as the on off switch additionally to a delete button shown as "x"
*/

import React from 'react'
import { Text, View, Switch, Button } from 'react-native'

export default class WeckerElement extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={{
        flexDirection: 'row',
      }}>
            <Text>{this.props.weckerZeit}</Text>
            { /* the value (on or off) as well as the function that is called on click are passed down as props and thereby will be changed in the mother component */ }
            <Switch value={this.props.onOffSwitch} onValueChange={() => this.props.handleSwitchChange(this.props.id)} />
            <Button title={"x"} onPress={() => this.props.handleCloseButton(this.props.id)} />
        </View>
    )
  }
}