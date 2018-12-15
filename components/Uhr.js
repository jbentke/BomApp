import React from 'react'
import { Text } from 'react-native';

export default class Uhr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zeit: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      }),
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        zeit: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      })
    }, 60000)
  }

  render() {
    return (
      <Text>{this.state.zeit}</Text>
    )
  }
}