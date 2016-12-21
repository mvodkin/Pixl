import React from "react";
import { Link, hashHistory } from "react-router";
import Headroom from "react-headroom";

class Header extends React.Component {

  constructor(props, logout, currentUser) {
    super(props);
    this.state = {
      headroomDisabled: false
    };
    this.logout = logout;
    this.currentUser = currentUser;
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.logout();
    hashHistory.push("login");
  }

  profileLink() {
    return `/user/${this.currentUser.id}`
  }

  componentWillReceiveProps(newProps) {
    debugger
    if (window.location.hash.includes("new")) {
      this.setState({headroomDisabled: true});
    } else {
      this.setState({headroomDisabled: false});
    }
  }

  render() {
    return (

      <Headroom disable={this.state.headroomDisabled} className="headroom">
        <div className="header-nav">
          <Link to="/" className="logo-nav" data-text="Pixl">Pixl</Link>

          <form className="search">
            <input className="search-bar" type="text" placeholder="Search" />
          </form>

          <div className="nav-list-container">
            <ul className="nav-list">
              <li><Link to="/new" data-text="new post">draw</Link></li>
              <li><Link to="/explore" data-text="notifications">explore</Link></li>
              <li><Link to={this.profileLink()} data-text="profile">profile</Link></li>
              <li><div onClick={this.handleLogout}>log out</div></li>
            </ul>
          </div>
        </div>
      </Headroom>

    );
  }
};
export default Header;
