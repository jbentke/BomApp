import React from 'react'
import { Text, View, Switch } from 'react-native'

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
        </View>
    )
  }
}