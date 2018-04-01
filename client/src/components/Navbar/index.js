import React from 'react';
import "./style.css";


const Navbar = (props) => {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  Welcome! You are logged in as {props.username}. <br />
              </li>
              <li className="nav-item">
              <button className="btn btn-primary btn-sm" onClick = {props.handleLogout}>Log Out</button>
                </li>
            </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-1" type="text" placeholder="Search" />
                <button className="btn btn-primary btn-lg" >Student Search</button>
              </form>
      </nav>
	);
}

export default Navbar;