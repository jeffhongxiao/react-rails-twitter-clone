export default class Tweet extends React.Component {
  render() {
    return (
      <li>

        <span>{this.props.name}</span>
        <p>{this.props.body}</p>
      </li>
    );
  }
}
