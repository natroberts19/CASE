import React from 'react';

// gather other componets
//import otherComponent from "../otherComponent";

const Navbar = (props) => {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="https://natroberts19.github.io/">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <p style={{fontFamily: "Lato"}}>You are logged in as {props.username}  </p>
                </li>
                <br />
              <li className="nav-item">
              <button className="btn btn-primary btn-sm" onClick = {props.handleLogout}> Log Out</button>
                </li>
                
                
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-1" type="text" placeholder="Search" />
                <button className="btn btn-primary btn-lg" >Student Search</button>
              </form>
            </div>
      </nav>
	);
}

export default Navbar;