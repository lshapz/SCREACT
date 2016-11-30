import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CLIENT_ID } from '../../constants/auth';
// import star from '../../../files/star'
import { Audio } from 'redux-audio'

class Stream extends Component {

  componentDidUpdate() {
    const audioElement = ReactDOM.findDOMNode(this.refs.audio);

    if (!audioElement) { return; }

    const { activeTrack } = this.props;

    if (activeTrack) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  render () {

    const { user, tracks, activeTrack, onAuth, onPlay } = this.props;
    return (
      <div>
        <div>
          {
            user ?
              <div>{user.username}</div> :
              <button onClick={onAuth} type="button">Login</button>
          }
        </div>
        <br/>
        <div>
          { 
            tracks.map((track, key) => {
              return (
                <div className="track" key={key}>
                  {track.origin.title}
                  <button type="button" onClick={() => onPlay(track)}>Play</button>
                </div>
              );
            })
          }
        </div>
        {
          activeTrack ?
            <Audio src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`} controls /> :
            null
        }
      </div>
    );
  }
}

export default Stream;
