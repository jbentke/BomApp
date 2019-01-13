/*
This is the home screen It will show first and will be served by the react navigator from App.js
*/


import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Uhr from './Uhr.js'
import Uhr2 from './Uhr2.js'
import WeckerElement from './WeckerElement.js'

//We create a class that inherits from the Component class of the react library.
//Then we export that class as the default option. That means wenn we import that 
//file later as a component, that class will be used. (You can have multiple components in one file)
export default class HomeScreen extends React.Component {

  //These are options we can set for the navigator, in this case we call the screen "Welcome", 
  //it will show at the top of the screen
  static navigationOptions = {
    title: 'Welcome',
  };

  //The constructor of the component
  constructor(props) {

    //this line states that we take the properties (props) from the super class 
    //(the component that uses this component, in this case App.js)
    super(props);

    //here we define the "state" of the component. Its basically kind of its memory where we 
    //define all its initial variables and its initial values
    this.state = {
      weckerArray: []
    }

    //in order for functions in our component to use the "props", we need to redefine what "this"
    //means for them, if we wouldnt do that, "this" within the function would refer to the context
    //of the function and not of the component
    this.handleSwitchChange = this.handleSwitchChange.bind(this)
    this.handleCloseButton = this.handleDeleteWeckerButton.bind(this)
    this.handleClick = this.handlePlusButtonClick.bind(this)
    this.checkWecker = this.checkWecker.bind(this)
    this.handlePlusButtonClick = this.handlePlusButtonClick.bind(this)
    this.addWeckerElement = this.addWeckerElement.bind(this)
  }

  //this function handles the case when we click on a switch belonging to a wecker, its called from a WeckerElement component
  handleSwitchChange(weckerId) {
    //here we get the index of the element with the weckerId we passed as argument 
    //(check "findIndex" of Array if you wanna know how exactly it works)
    id = this.state.weckerArray.findIndex((element) => element.id == weckerId)
    //we take the array from the state and modify it here
    newWeckerArray = this.state.weckerArray
    //now we change the state of the switch to the oposite of what it was
    newWeckerArray[id].onOffSwitch = !newWeckerArray[id].onOffSwitch
    //lets write the changed array back to state
    this.setState({
      weckerArray: newWeckerArray
    })
  }

  //like the name saith, we delete a wecker
  handleDeleteWeckerButton(weckerId) {
    //we take the array from the state and modify it here
    altesArray = this.state.weckerArray
    //here we get the index of the element with the weckerId we passed as argument 
    //(check "findIndex" of Array if you wanna know how exactly it works)
    id = this.state.weckerArray.findIndex((element) => element.id == weckerId)
    //we initialize the count variable for the for loop
    var i = 0;
    //if we have the last element in the array then we can just call pop() which delets it from the array
    if (id == altesArray.lenght - 1) {
      altesArray.pop()
    } else {
      //if not: we have to shift the elements in the array from right to left, starting at the position of the 
      //element we want to delete
      for (i = id; i = altesArray.lenght - 1; i++) {
        altesArray[i] = altesArray[i + 1];
      }
      //then we delete the last element, since it is not needed anymore
      altesArray.pop()
    }
    //now we store the changed array back to the state
    this.setState({
      weckerArray: altesArray
    })
  }

  //Here we create a new Wecker. We pass 3 parameters to that functions, when it goes of, where we left of in the scriptures
  //and if it is turned on or of
  addWeckerElement(_weckerzeit, _whereAmI, _onOffSwitch) {
    //we take the array from the state and modify it here
    altesArray = this.state.weckerArray
    //here we push a new element to the array with the parameters we passed and a incremented id
    altesArray.push({
      id: altesArray.length,
      weckerZeit: _weckerzeit,
      whereAmI: _whereAmI,
      onOffSwitch: _onOffSwitch
    })
    //now we store the changed array back to the state
    this.setState({
      weckerArray: altesArray
    })
  }

  //If we press the "+" button the we do stuff which is defined in here
  handlePlusButtonClick(e) {
    //Here we use react navigator which passed us a prop that we can use to navigate to a different screen,
    //in that case to the WeckerScreen which we defined in App.js that contains the WeckerEinstellungen component.
    this.props.navigation.navigate('WeckerScreen', {
      //this is a property we pass to the WeckerEinstellungen component, its the addWeckerElement() function that changes 
      //the settings of a Wecker or creates a new one
      addWeckerElement: this.addWeckerElement
    })
  }

  //Here we check every single wecker we set up and check if its time to ring the bell. However we do not call it from this component
  //but from a child component "Uhr" we wrote which is keeping the current time and calls this function every second.
  checkWecker(currentTime) {
    //check all wecker and compare timestamp
    this.state.weckerArray.map((singleWecker) => {
      singleWecker.weckerZeit < currentTime ? this.klingel() : null
    })
  }

  //This function will be called when the alarm goes off. Its called by "checkWecker"
  klingel() {
    console.log("kilingeling")
    //setze Wecker neu

  //rufe klingelfenster auf
  //klingel im Fenster
  }

  //Each component needs a render function. This function will be called when the component is "painted" onto the screen. 
  //It has all the "html"-like elements that will be shown
  render() {
    //The return statement returns all elements that should be rendered. It can only be one main html element, in this case a <View>. 
    //Within that view you can have as much child attributes as you want.
    return (
      //The View element is a react-native element (we imported it above) and is comparable to a html <div>
      <View style={styles.container}>
      { /* This is how you do comments within react-native elements */ }
        { /* The "Uhr" element is something we wrote ourselves and imported it above. Here will the render() method from Uhr be called. Same for Uhr2 (the binary watch) */ }
        <Uhr checkWecker={this.checkWecker}/>
        <Uhr2></Uhr2>
        { /* The next line is a lot so lets break it down. First, like this comment, the {} brackets are used for objects or expressions. Here we have a shorthand notation
        for an if statement "condition ? what happens if true : what happens if false". What we do is, we check if the array in which we store the alarmclock elements is
        defined, meaning if there are any elements in it. If not we will just render nothing (null). If there is however, we take the information in the array and make for
        each element in it a new "WeckerElement" component (look up the "map" function for Arrays).
        If you call a react component, you can pass arguments, called properties (noted as props) to it which it can use. You can compare it to arguments to a function.
        The notation is "nameOfTheProperty={valueOfTheProperty}". Since javascript is type agnostic it can be anything from a string to a function. If it is a function,
        then it will be called in the mother component since its only a reference. Here we pass the attributes weckerZeit, onOffSwitch and id we get from the element we
        got from the weckerArray. Additionally we pass two functions, "handleSwitchChange" and "handleCloseButton". This is so we can deal with the button state and the
        deleting of an weckerElement from this component here and not from the WekcerElement component. */ }
        {this.state.weckerArray ? this.state.weckerArray.map((singleWecker, index) => <WeckerElement weckerZeit={singleWecker.weckerZeit} onOffSwitch={singleWecker.onOffSwitch} handleSwitchChange={this.handleSwitchChange} handleCloseButton={this.handleDeleteWeckerButton} id={singleWecker.id} key={index}/>) : null}
        { /* A button with a "+" sign that calls the "handlePlusButtonClick" function when pressed. */ }
        <Button title={"+"} onPress={this.handlePlusButtonClick} ></Button>
      </View>
      );
  }
}

//You can define variables and constants outside the class that can be used by that class. In order to use it outside of this file
//you have to export it however

//These are styles like in a css file. We use it in the first <View> element from the render method.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

