import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <header>Github Users</header>
        <form
          className="search-form"
          onSubmit={e => {
            e.preventDefault();
            this.props.fetchUser(e.currentTarget.childNodes[0].value);
          }}
        >
          <input
            type="text"
            name="user"
            placeholder="Search For Users in Github"
            required
          />
          <button type="submit">Search </button>
        </form>
      </div>
    );
  }
}
export default Header;
