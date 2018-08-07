import React from "react";
import "./Nav.css";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          Cross Kinect
        </a>
      </div>
      <div className="nav-links">
        <div className="chruches-link">
          <button type="button" className="collapsed navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" /> <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a href="" className="navbar-brand">
            Churches 
          </a>
        </div>
        <div className="events-link">
          <button type="button" className="collapsed navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" /> <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a href="" className="navbar-brand">
            Events
          </a>
        </div>
        <div className="login/signup-link">
          <button type="button" className="collapsed navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" /> <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a href="" className="navbar-brand">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  </nav>;

export default Nav;



{/* <ul>
  <li class="nav-item ">
    <a class="nav-link active " href="">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="">Events</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="">Churches</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="">Sign Up</a>
  </li>
</ul> */}
