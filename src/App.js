import React, { Component } from 'react'

import SongList from './Components/SongList'
import AddSong from './Components/AddSong'

export default class App extends Component {
    state = {
        songs: [{
            id: 1,
            title: "Call Me Maybe"
        },{
            id: 2,
            title: "For Whom The Bell Tolls"
        }]
    }
    addSong = event => {
      event.preventDefault()
      const formData = new FormData(event.target)
      this.setState({ songs: [...this.state.songs, {
        id: this.state.length - 1,
        title: formData.get('title')
      }]})
    }
    render(){
      return (
        <div className="App">
          <AddSong addSong={this.addSong} />
          <SongList songs={this.state.songs} />
        </div>
      )
    }
}
