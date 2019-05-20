import React, { Component } from 'react';

import Song from './Song'

export default class SongList extends Component {
  displaySongList() {
      return this.props.songs.map(song => {
          return <Song { ...song } key={song.id}/>
      })
  }
  render(){
      return (
        <div className="SongList">
          {this.displaySongList()}
        </div>
      )
  }
}
