import AppDispatcher from "../dispatcher";
import ActionTypes from '../constants.jsx';

export default {
  receivedTweets(rawTweets) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets: rawTweets
    });
  },
  receivedOneTweet(rawTweets) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.CREATED_TWEET,
      rawTweets: rawTweets
    });
  }
}
