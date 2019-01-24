import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Player from 'sound/player.js'

class Drawer extends Component {
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
  _onPressToggle () {
    Player.toggle()
  }
  _onPressPrev () {
    Player.prev()
  }
  _onPressNext () {
    Player.next()
  }
  render () {
    return <View style={styles.player}>
      <Button style={styles.button} onPress={this._onPressPrev} title="Prev" />
      <Button style={styles.button} onPress={this._onPressToggle} title="Play" />
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