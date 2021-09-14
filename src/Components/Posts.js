import { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount = async () => {
    const shit = this.props.match.params.id;
    let url = `https://jsonplaceholder.typicode.com/posts/${shit}`;
    const api_call = await fetch(url);
    const data = await api_call.json();
    this.setState({ posts: data });
    console.log(this.state.posts);
  };
  render() {
    return (
      <div className="post-container">
        {this.state.posts.length !== 0 && (
          <div className="post-box">
            <p>
              ID:<span> {this.state.posts.id}</span>
            </p>
            <p>
              User_ID:<span> {this.state.posts.userId}</span>
            </p>
            <p>
              TITLE:
              <span>{this.state.posts.title}</span>
            </p>
            <p>
              Post:
              <span>{this.state.posts.body}</span>
            </p>
            <button className="post-button">
              <Link to="/">Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Posts;
