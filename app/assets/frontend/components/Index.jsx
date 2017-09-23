import React from 'react';
import ReactDOM from 'react-dom';

import TweetBox from './TweetBox';
import TweetList from './TweetList';

// TODO remove temp testing code
import TweetStore from "../stores/TweetStore";
import TweetActions from '../actions/TweetAction';
TweetActions.getAllTweets();

let getAppState = () => {
    return {
      tweetsList: TweetStore.getAll()
    };
}

export default class Index extends React.Component {
  constructor(props) {
    super();

    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
/*
  addTweet(tweetToAdd) {
  //   $.post('/tweets', { body: tweetToAdd })
  //   .success(savedTweet => {
  //     let newTweetsList = this.state.tweetsList;
  //     newTweetsList.unshift(savedTweet);
  //     this.setState(this.formattedTweet(newTweetsList));
  //   })
  //   .error(error => console.log(error));
  }
*/
  componentDidMount() {
    TweetStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState(getAppState());
  }

  render() {
    return (
      <div className="container">
        <TweetBox  />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}
