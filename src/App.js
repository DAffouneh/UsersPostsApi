import "./App.css";
import Button from "../src/Components/Button";
import React, { Component } from "react";
import Users from "../src/Components/Users";
class App extends Component {
  state = {
    users: [],
  };
  getData = async () => {
    let url = `https://jsonplaceholder.typicode.com/posts`;
    const api_call = await fetch(url);
    const data = await api_call.json();
    this.setState({ users: data });
    console.log(this.state.users);
  };

  componentDidMount = () => {
    const json = localStorage.getItem("data");
    const users = JSON.parse(json);
    this.setState({ users: users });
  };
  componentDidUpdate = () => {
    const data = JSON.stringify(this.state.users);

    localStorage.setItem("data", data);
  };
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Users-Posts</h1>
        </header>
        <Button getData={this.getData}></Button>
        <Users users={this.state.users}></Users>
      </div>
    );
  }
}

export default App;
