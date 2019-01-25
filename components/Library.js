import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

class Library extends Component {
  constructor (props) {
    super(props)
    this.ao = props.ao
    this.state = {
      tracks: props.tracks,
      error: ''
    }
  }
  sendToPlayer = async (item) => {
    this.ao.add(item)
  }
  render () {
    return <View>
      <FlatList style={styles.list}data={this.state.tracks} renderItem={({item}) => {
        return <Text onPress={() => this.sendToPlayer(item)}>{item.title}</Text>} 
      }/>
      </View>
  }
}

const styles = StyleSheet.create({
  loading: {
    backgroundColor: '#000',
    color: '#fff'
  }
})

export default Library