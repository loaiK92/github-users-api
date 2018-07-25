import React from "react";
import "./App.css";
import User from "./User";
import UserGrid from "./UserGrid";
import Header from "./Header";

class App extends React.Component {
  state = {
    users: [],
    user: null
  };

  fetchUser = username => {
    fetch(`https://api.github.com/search/users?q=${username}&per_page=1000`)
      .then(user => user.json())
      .then(result => {
        this.setState({
          users: result.items
        });
      })
      .catch(err => {
        throw err;
      });
  };

  getUser = username => {
    fetch(`https://api.github.com/users/${username}`)
      .then(result => result.json())
      .then(user => {
        this.setState({
          user: user
        });
      })
      .catch(err => {
        throw err;
      });
  };

  backToResult = () => {
    let userData = this.state.user;
    userData = null;
    this.setState({
      user: userData
    });
  };

  render() {
    if (this.state.users.length === 0) {
      return (
        <div className="App">
          <Header fetchUser={this.fetchUser} />
          <h2 className="noResult">-- No Result --</h2>
        </div>
      );
    }
    if (this.state.user === null) {
      return (
        <div className="App">
          <Header fetchUser={this.fetchUser} />

          <UserGrid getUser={this.getUser} usersData={this.state.users} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header fetchUser={this.fetchUser} />

          <User backToResult={this.backToResult} userData={this.state.user} />
        </div>
      );
    }
  }
}

export default App;
