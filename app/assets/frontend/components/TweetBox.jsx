import React from 'react';
import ReactDOM from 'react-dom';

import TweetActions from '../actions/TweetAction';

export default class TweetBox extends React.Component {
  sendTweet(event) {
    event.preventDefault();
    TweetActions.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = '';
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.sendTweet.bind(this)}>
          <div className="input-field">
            <textarea className="materialize-textarea" ref="tweetTextArea" />
            <label>What's happening</label>
            <button className="btn right" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
