import React from 'react';
import "./style.css";


const Navbar = (props) => {
	return(
		<nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item" style={{"fontSize" : "16px"}}>
                You are logged in as <strong style={{"color" : "blue"}}> {props.username}</strong> <br />
            </li>
        </ul>
        <span className="form-inline my-2 my-lg-0">
          <button className="btn btn-primary btn-sm" onClick = {props.handleLogout}>Log Out</button>
        </span>
    </nav>
	);
}

export default Navbar;