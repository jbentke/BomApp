import React from 'react'
import { Text } from 'react-native';

export default class Uhr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      zeit: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        zeit: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
       
      });
      this.props.checkWecker(parseInt(new Date().getHours() / 1000))
    }, 1000)
  }

  render() { 
    return (
      <Text> {this.state.zeit}</Text>
    )
  }
}