import Tweet from './Tweet';

export default class TweetList extends React.Component {
  render() {
    const tweets = this.props.tweets;
    const tweetsList = tweets.map(
      tweet => <Tweet key={tweet.id} {...tweet} />);

    return (
      <div>
        <ul>
          {tweetsList}
        </ul>
      </div>
    );
  }
}
