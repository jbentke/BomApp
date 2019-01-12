import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Uhr from './Uhr.js'
import Uhr2 from './Uhr2.js'
import WeckerElement from './WeckerElement.js'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props) {
    super(props);
    this.state = {
      weckerArray: []
    }

    this.handleSwitchChange = this.handleSwitchChange.bind(this)
    this.handleCloseButton = this.handleCloseButton.bind(this)
    this.handleClick = this.handlePlusButtonClick.bind(this)
    this.checkWecker = this.checkWecker.bind(this)
    this.handlePlusButtonClick = this.handlePlusButtonClick.bind(this)
    this.addWeckerElement = this.addWeckerElement.bind(this)
  }

  handleSwitchChange(weckerId) {
    id = this.state.weckerArray.findIndex((element) => element.id == weckerId)
    newWeckerArray = this.state.weckerArray
    newWeckerArray[id].onOffSwitch = !newWeckerArray[id].onOffSwitch
    this.setState({
      weckerArray: newWeckerArray
    })
  }

  handleCloseButton(weckerId) {
    altesArray = this.state.weckerArray
    id = this.state.weckerArray.findIndex((element) => element.id == weckerId)
    var i = 0;
    if (id == altesArray.lenght - 1) {
      altesArray.pop()
    } else {
      for (i = id; i = altesArray.lenght - 1; i++) {
        altesArray[i] = altesArray[i + 1];
      }

      altesArray.pop()
    }

    this.setState({
      weckerArray: altesArray
    })
  }

  addWeckerElement(_weckerzeit, _whereAmI, _onOffSwitch) {
    altesArray = this.state.weckerArray
    altesArray.push({
      id: altesArray.length,
      weckerZeit: _weckerzeit,
      whereAmI: _whereAmI,
      onOffSwitch: _onOffSwitch
    })
    this.setState({
      weckerArray: altesArray
    })
  }

  handlePlusButtonClick(e) {
    this.props.navigation.navigate('WeckerScreen', {
      addWeckerElement: this.addWeckerElement
    })
  }

  checkWecker(currentTime) {
    //check all wecker and compare timestamp
    this.state.weckerArray.map((singleWecker) => {
      singleWecker.weckerZeit < currentTime ? this.klingel() : null
    })
  }

  klingel() {
    console.log("kilingeling")
    //setze Wecker neu

  //rufe klingelfenster auf
  //klingel im Fenster
  }

  render() {
    return (
      <View style={styles.container}>
        <Uhr checkWecker={this.checkWecker}/>
        <Uhr2></Uhr2>
        {this.state.weckerArray ? this.state.weckerArray.map((singleWecker, index) => <WeckerElement weckerZeit={singleWecker.weckerZeit} onOffSwitch={singleWecker.onOffSwitch} handleSwitchChange={this.handleSwitchChange} handleCloseButton={this.handleCloseButton} id={singleWecker.id} key={index}/>) : null}
        <Button title={"+"} onPress={this.handlePlusButtonClick} ></Button>
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

