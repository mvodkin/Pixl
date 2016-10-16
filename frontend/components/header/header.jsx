import React from "react";
import { Link, hashHistory } from "react-router";

const Header = ({logout, currentUser}) => {

  const handleLogout = () => {
    logout();
    hashHistory.push("login");
  }

  const profileLink = () => {
    return `/user/${currentUser.id}`
  }

  return (

    <div className="header-nav">
      <Link to="/" className="logo-nav" data-text="Pixl">Pixl</Link>

      <form className="search">
        <input className="search-bar" type="text" placeholder="Search" />
      </form>

      <div className="nav-list-container">
        <ul className="nav-list">
          <li><Link to="/new" data-text="new post">draw</Link></li>
          <li><Link to="/explore" data-text="notifications">explore</Link></li>
          <li><Link to={profileLink()} data-text="profile">profile</Link></li>
          <li><div onClick={handleLogout}>log out</div></li>
        </ul>
      </div>
    </div>

  );
};
export default Header;

// <li className="nav-icon"><img src={window.images.camera}></img></li>
// <li className="nav-icon"><img src={window.images.heart}></img></li>
// <li className="nav-icon"><img src={window.images.invader}></img></li>
