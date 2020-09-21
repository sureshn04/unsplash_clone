import React from "react";
import AvatarImg from "./images/avatar.jpg";
import './NavBarStyle.css'
import homeIcon from "./images/ms-icon.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="homeElement">
        <a className="anchorDiv">
          <img className="homeIconImage" src={homeIcon} />
        </a>
        <div className="inputDiv">
          <button className="searchButton">
            <i className="fas fa-search" />
          </button>
          <input
            className="inputBox"
            type="text"
            placeholder="Search free high-resolution photos"
          />
        </div>
      </div>
      <div className="clickable-element">
        <ul className="Link-Element">
          <li className="listElement">
            <a href="" className="anchorDiv">
              Home
            </a>
          </li>
          <li className="listElement">
            <a href="" className="anchorDiv">
              Collections
            </a>
          </li>
          <li className="listElement">
            <a href="" className="anchorDiv">
              Explore
            </a>
          </li>
          <li className="listElement">
            <a href="" className="anchorDiv">
              <i className="fas fa-ellipsis-h" />
            </a>
          </li>
        </ul>
      </div>
      <div className="navElements">
        <div className="submitPhoto">
          <button className="submitButton">Submit a photo</button>
        </div>
        <div className="bell">
          <a href="" className="bellIcon">
            <i className="fas fa-bell fa-1x" />
          </a>
        </div>
        <div className="avatar">
          <img src={AvatarImg} className="avatarImg" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;