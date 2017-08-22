import Greet from './greet';
import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

class Main extends React.Component {
  render() {
    return (
      <div>
        <TweetBox />
        <TweetList />
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
