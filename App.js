import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Uhr from './components/Uhr.js'
import WeckerElement from './components/WeckerElement.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weckerArray: []
    }

    this.handleSwitchChange = this.handleSwitchChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.checkWecker = this.checkWecker.bind(this)
  }

  handleSwitchChange(weckerId) {
    id = this.state.weckerArray.findIndex((element) => element.id == weckerId)
    newWeckerArray = this.state.weckerArray
    newWeckerArray[id].onOffSwitch = !newWeckerArray[id].onOffSwitch
    this.setState({
      weckerArray: newWeckerArray
    })
  }

  handleClick(e) {
    altesArray = this.state.weckerArray
    altesArray.push({
      id: altesArray.length,
      weckerZeit: 1644884052,
      whereAmI: "1.Nephi 4:5",
      onOffSwitch: true
    })
    this.setState({
      weckerArray: altesArray
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
        {this.state.weckerArray ? this.state.weckerArray.map((singleWecker, index) => <WeckerElement weckerZeit={singleWecker.weckerZeit} onOffSwitch={singleWecker.onOffSwitch} handleSwitchChange={this.handleSwitchChange} id={singleWecker.id} key={index}/>) : null}
        <Button title={"+"} onPress={this.handleClick} ></Button>
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
