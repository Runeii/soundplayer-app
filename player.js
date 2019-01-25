import TrackPlayer from 'react-native-track-player'

export default class Player {
  constructor () {
    TrackPlayer.setupPlayer()
    this.playing = false
  }

  // Methods
  async add (track) {
    await TrackPlayer.add({
      id: track.id,
      url: 'https://ccrma.stanford.edu/~jos/mp3/pno-cs.mp3',
      title: track.title,
      artist: track.artist,
      album: track.album
    })
    let queue = await TrackPlayer.getQueue()
    if (queue.length === 1) TrackPlayer.play()
  }
  toggle () {
    if (this.playing) { 
      this.pause()
      return false
    } else {
      this.play()
      return false
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