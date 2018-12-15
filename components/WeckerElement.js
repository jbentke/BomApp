import React from 'react'
import { Text, View, Switch } from 'react-native'

export default class WeckerElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weckerZeit: "--;--",
      onOffSwitch: false,
    }

    this.handleSwitchChange = this.handleSwitchChange.bind(this)
  }

  handleSwitchChange() {
    this.setState({
      onOffSwitch: !this.state.onOffSwitch
    })
  }

  render() {
    return (
      <View style={{
        flexDirection: 'row',
      }}>
            <Text>{this.state.weckerZeit}</Text>
            <Switch value={this.state.onOffSwitch} onValueChange={this.handleSwitchChange} />
        </View>
    )
  }
}