import TrackPlayer from 'react-native-track-player'

export default class Player {
  constructor () {
    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.registerPlaybackService(() => require('./service.js'));
    })
    this.playing = false
  }

  // Methods
  async add (track) {
    await TrackPlayer.add({
      id: '1',
      url: 'https://ccrma.stanford.edu/~jos/mp3/pno-cs.mp3',
      title: 'blank',
      artist: 'blank',
      album: 'blank'
    })
    let queue = await TrackPlayer.getQueue()
    if (queue.length === 1) TrackPlayer.play()
  }
  toggle () {
    if (this.playing) { 
      this.pause()
    } else {
      this.play()
    }
  }
  play () {
    TrackPlayer.play()
    this.playing = true
  }
  pause () {
    TrackPlayer.pause()
    this.playing = false
  }
  next () {
  }
  prev () {
  }
}