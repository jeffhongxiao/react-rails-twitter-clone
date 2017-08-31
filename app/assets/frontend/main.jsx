import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

class Main extends React.Component {
  constructor(props) {
    super();

    this.state = { tweetsList: [] };
  }

  addTweet(tweetToAdd) {
    $.post('/tweets', { body: tweetToAdd })
    .success(savedTweet => {
      let newTweetsList = this.state.tweetsList;
      newTweetsList.unshift(savedTweet);
      this.setState({tweets: newTweetsList});
    })
    .error(error => console.log(error));
}

  componentDidMount() {
    $.ajax('/tweets')
      .success(data => this.setState({tweetsList: data}))
      .error(error => console.log(error));
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
