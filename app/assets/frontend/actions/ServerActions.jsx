import AppDispatcher from "../dispatcher";
import ActionTypes from '../constants.jsx';

export default {
  receivedTweets(rawTweets) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets: rawTweets
    });
  }
}
