import API from "../API";

export default {
  getAllTweets() {
    API.getAllTweets();
  },
  createNewTweet(body) {
    API.createNewTweet(body);
  }
}
