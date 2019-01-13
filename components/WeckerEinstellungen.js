//This component is a screen which is shown when the "+" button is clicked

import React from 'react';
import { Text, View, Button } from 'react-native';

export default class WeckerEinstellungen extends React.Component {

  constructor(props) {
    super(props);

    this.buttonIsPressed = this.buttonIsPressed.bind(this)
  }

  //Here we call the addWeckerElement function from the component we navigated from (HomeScreen), thats why it looks so messy
  buttonIsPressed() {
    this.props.navigation.state.params.addWeckerElement(123324234, "Irgendwo", false)
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
          <Text>Details Screen</Text>
          <Button title={"Drück mich"} onPress={this.buttonIsPressed}></Button>
        </View>
      );
  }
}