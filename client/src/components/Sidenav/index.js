import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Sidenav = (props) => {
	return(			
			<div className="sidenav">
				<a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sidenav"><i className="fa fa-map-signs"></i> Dashboard</a>
				<a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sidenav"><i className="fa fa-user"></i> Student</a>
				<a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sidenav"><i className="fa fa-industry"></i> Reports</a>
				<a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sidenav"><i className="fa fa-check-square"></i> Tasks</a>
				<a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sidenav"><i className="fa fa-user-plus"></i> Advisor</a>
			</div>
	);
}

export default Sidenav;