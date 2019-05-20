import React, {Component} from 'react'
export default class AddSong extends Component {
  render() {
    return (
      <form name='newSongForm' onSubmit={this.props.addSong}>
        <label>Title:
          <input name='title' />
        </label>
        <button type='submit'>Add Song</button>
      </form>
    )
  }
}
