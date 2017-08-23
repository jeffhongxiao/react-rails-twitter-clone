import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

class Main extends React.Component {
  constructor(props) {
    super();

    this.state = { tweetList: [] };
  }

  addTweet(text) {
    let updated = this.state.tweetList;
    const newTweet = {id: new Date(), name: 'Hong', body: text};
    updated.unshift(newTweet);

    this.setState({tweets: updated});
  }

  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetList tweets={this.state.tweetList} />
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
}

$(documentReady);
