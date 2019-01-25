import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class Drawer extends Component {
  constructor (props) {
    super(props)
    this.ao = props.ao
    this.state = {
      track: this.props.track,
      playing: false
    }
  }
  changeState (newState) {
    let oldState = this.state.state
    if (oldState === newState) return false
  }
  _onPressToggle = () => {
    this.ao.toggle()
    this.setState({
      playing: !this.state.playing
    })
  }
  _onPressPrev = () => {
    this.ao.prev()
  }
  _onPressNext = () => {
    this.ao.next()
  }
  render () {
    return <View style={styles.player}>
      <Button style={styles.button} onPress={this._onPressPrev} title="Prev" />
      <Button style={styles.button} onPress={this._onPressToggle} title={`${this.state.playing ? 'Pause' : 'Play'}`} />
      <Button style={styles.button} onPress={this._onPressNext} title="Next" />
      </View>
  }
}

const styles = StyleSheet.create({
  player: {
    flexDirection: 'row',
    height: '20%'
  },
  button: {
  }
})

export default Drawer