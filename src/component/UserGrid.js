import React from "react";
import "./UserGrid.css";

class UserGrid extends React.Component {
  render() {
    const users = this.props.usersData;

    return (
      <div className="usergrid">
        {users.map(user => {
          return (
            <a
              className="card"
              key={user.id}
              onClick={() => {
                this.props.getUser(user.login);
              }}
            >
              <div>
                <img src={user.avatar_url} alt={user.login} />
                <h2>{user.login}</h2>
              </div>
            </a>
          );
        })}
      </div>
    );
  }
}
export default UserGrid;
