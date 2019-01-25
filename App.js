/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'react-native-firebase'
import Library from './components/Library'
import Drawer from './components/Drawer'
import Player from 'sound/player.js'

export default class App extends Component {
  constructor () {
   super()
   this.ref = firebase.firestore().collection('tracks')
   this.ao = new Player
   this.unsubscribe = null
   this.state = {
     tracks: [],
     loading: true
   }
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this._onCollectionUpdate)
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  _onCollectionUpdate = (querySnapshot) => {
    const tracks = [];
    querySnapshot.forEach((doc) => {
      const { uuid, name, artist, album } = doc.data();
      tracks.push({
        key: uuid,
        title: name,
        artist: artist,
        album: album
      });
    })
    console.log(tracks)
    this.setState({ 
      tracks,
      loading: false,
    })
  }
  render() {
    if (this.state.loading) return <Text style={styles.loading}>Loading</Text>
    return (
      <View style={styles.container}>
        <Library ao={this.ao} tracks={this.state.tracks} />
        <Drawer ao={this.ao} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
