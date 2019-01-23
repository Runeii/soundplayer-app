import React, {Component} from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import firebase from 'react-native-firebase'

class Library extends Component {
  constructor () {
    super()
    this.ref = firebase.firestore().collection('tracks')
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
      const { name } = doc.data();
      tracks.push({ key: doc.id, name });
    })
    this.setState({ 
      tracks,
      loading: false,
    })
  }

  render () {
    if (this.state.loading) return <Text style={styles.loading}>Loading</Text>
    return <FlatList style={styles.list}data={this.state.tracks} renderItem={({item}) => <Text>{item.name}</Text>} />
  }
}

const styles = StyleSheet.create({
  loading: {
    backgroundColor: '#000',
    color: '#fff'
  }
})

export default Library