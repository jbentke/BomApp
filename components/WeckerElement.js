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
            <Switch value={this.props.onOffSwitch} onValueChange={() => this.props.handleSwitchChange(this.props.id)} />
            <Button title={"x"} onPress={() => this.props.handleCloseButton(this.props.id)} />
        </View>
    )
  }
}