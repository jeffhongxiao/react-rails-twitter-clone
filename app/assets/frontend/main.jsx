import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

var tweets = [
  {id: 1, name: "Hong", body: "This is a tweet."},
  {id: 2, name: "Hong", body: "This is another tweet."},
  {id: 3, name: "Hong", body: "Yet another tweet."}
];

class Main extends React.Component {
  render() {
    return (
      <div>
        <TweetBox />
        <TweetList tweets={tweets} />
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
