import React from "react";
import "./User.css";

class User extends React.Component {
  render() {
    const user = this.props.userData;
    console.log(user);
    if (user.location !== null) {
      var theLocation = (
        <p>
          <span>&#128204;</span> {user.location}
        </p>
      );
    }

    return (
      <div className="user">
        <a
          className="backBtn"
          onClick={() => {
            this.props.backToResult();
          }}
        >
          Back
        </a>
        <div className="detailes cf">
          <div className="image">
            <img src={user.avatar_url} alt={user.login} />
            <div className="login">
              <h2>{user.login}</h2>
              {theLocation}
            </div>
          </div>
          <div className="links">
            <a
              className="follow"
              href={`https://github.com/${user.login}?tab=followers`}
            >
              Followers: <span>{user.followers}</span>
            </a>
            <a
              className="follow"
              href={`https://github.com/${user.login}?tab=following`}
            >
              Following: <span>{user.following}</span>
            </a>
            <a
              className="follow"
              href={`https://github.com/${user.login}?tab=repositories`}
            >
              Repos: <span>{user.public_repos}</span>
            </a>
          </div>
          <div className="view">
            <a href={user.html_url}>View in Github</a>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
