import React from "react";
import { Link, hashHistory } from "react-router";

const Header = ({logout}) => {

  const handleLogout = () => {
    logout();
    hashHistory.push("login");
  }

  return (
    <header className="header">
      <div className="header-nav">
        <Link to="/" className="logo-nav" data-text="Pixl">Pixl</Link>

        <form className="search">
          <input className="search-bar" type="text" placeholder="Search" />
        </form>

        <div className="nav-list-container">
          <ul className="nav-list">
            <li><Link to="/" data-text="new post">new post</Link></li>
            <li><Link to="/" data-text="notifications">notifications</Link></li>
            <li><Link to="/" data-text="profile">profile</Link></li>
            <li><div onClick={handleLogout}>log out</div></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;

// <li className="nav-icon"><img src={window.images.camera}></img></li>
// <li className="nav-icon"><img src={window.images.heart}></img></li>
// <li className="nav-icon"><img src={window.images.invader}></img></li>
