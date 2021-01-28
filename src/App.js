import React from "react";
import axios from "axios";
import UserCard from "./UserCard";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      followers: [],
      username: "justin-mavity",
    };
  }

  getUser = (username) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
  };

  getFollowers = (username) => {
    axios
      .get(`https://api.github.com/users/${username}/followers`)
      .then((res) => this.setState({ followers: res.data }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getUser(this.state.username);
    this.getFollowers(this.state.followers);
  }

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.getUser(this.state.username);
    this.setState({
      username: "",
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="username"
            placeholder="Enter a github username"
            value={this.state.username}
            onChange={this.state.handleChange}
          />
          <button>Search</button>
        </form>
        <br />
        <div>
          <h1>This is {this.state.username}'s user card: </h1>
          <UserCard
            userInfo={this.state.data}
            followers={this.state.followers}
          />
        </div>
      </div>
    );
  }
}

export default App;