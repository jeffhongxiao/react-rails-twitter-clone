import AppDispatcher from "../dispatcher";
import ActionTypes from '../constants.jsx';

export default {
  receivedTweets(rawTweets) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      // Note: can be multiple tweets
      rawTweets: rawTweets
    });
  },
  receivedOneTweet(rawTweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.CREATED_TWEET,
      // Note: only a single tweet here
      rawTweet: rawTweet
    });
  }
}
