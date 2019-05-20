import React, {Component} from 'react'

export default class Song extends Component {
  render() {
    return (
      <li key={this.props.id}>
        <h2>{this.props.title}</h2>
      </li>)
    }
}
