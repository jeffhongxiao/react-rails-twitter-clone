import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

// TODO remove temp testing code
import TweetStore from "./stores/TweetStore";
import TweetActions from './actions/TweetAction';
TweetActions.getAllTweets();

let getAppState = () => {
    return {
      tweetsList: TweetStore.getAll()
    };
}

class Main extends React.Component {
  constructor(props) {
    super();

    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  addTweet(tweetToAdd) {
  //   $.post('/tweets', { body: tweetToAdd })
  //   .success(savedTweet => {
  //     let newTweetsList = this.state.tweetsList;
  //     newTweetsList.unshift(savedTweet);
  //     this.setState(this.formattedTweet(newTweetsList));
  //   })
  //   .error(error => console.log(error));
  }

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
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

const documentReady = () => {
  const reactNode = document.getElementById("react");
  if (reactNode) {
    ReactDOM.render(<Main />, reactNode);
  }
  else {
    console.log('may need to login');
  }
}

$(documentReady);
