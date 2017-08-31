export default class Tweet extends React.Component {
  render() {
    return (
      <li className="collection-item avatar">
        <i className="material-icons circle">person_pin</i>
        <span className="title">{this.props.name}</span>
        <time>{moment(this.props.created_at).fromNow()}</time>
        <p>{this.props.body}</p>
      </li>
    );
  }
}
