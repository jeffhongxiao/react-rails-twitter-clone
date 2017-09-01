import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import { EventEmitter } from "events";

let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter {
  getAll() {
    const formatted = _tweets.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });

    return formatted;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.addListener(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register(action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      console.log(4, "TweetStore gets RECEIVED_TWEETS action");
      _tweets = action.rawTweets;
      TweetStore.emitChange();
      break;
    default:
      // no op
  }
});

export default TweetStore;
