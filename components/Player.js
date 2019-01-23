import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class Player extends Component {
  constructor (props) {
    super(props)
    this.state = {
      track: this.props.track,
      state: false
    }
  }
  changeState (newState) {
    let oldState = this.state.state
    if (oldState === newState) return false
  }
  _onPressPlay () {

  }
  _onPressPrev () {

  }
  _onPressNext () {

  }
  render () {
    return <View style={styles.player}>
      <Button style={styles.button} onPress={this._onPressPrev} title="Prev" />
      <Button style={styles.button} onPress={this._onPressPlay} title="Play" />
      <Button style={styles.button} onPress={this._onPressNext} title="Next" />
      </View>
  }
}

const styles = StyleSheet.create({
  player: {
    flexDirection: 'row',
  },
  button: {
  }
})

export default Player