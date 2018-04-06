// ---------------------------------------------------------------------------------------------------
// Home is the "wrapper" for each of the page components (Dashboard, Student, Reports, ToDo, Advisor). 
// Home also includes the top navbar, side nav bar, and the footer.
// ---------------------------------------------------------------------------------------------------

import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
// import Sidenav from "../Sidenav";
// import Footer from '../Footer';
// Page components will render inside Home as they are called from the Sidenav! 
import Dashboard from "../Dashboard"
// import Navbar from "../Navbar"
// import Student from "../Student";
// import Reports from "../Reports";

const Home = (props) =>{
	return (
		
		<div className="container" style={{"marginLeft" : "0px"}}>
				
			<Dashboard />
			
			<div className="sidenav">
            
				<Link to = "/home/dashboard" ><i className="fa fa-dashboard"></i> Dashboard</Link>
				<Link to = "/api/students" ><i className="fa fa-user"></i> Student</Link>
				<Link to = "/api/reports" ><i className="fa fa-line-chart"></i> Reports</Link>
				<Link to = "/api/tasks" ><i className="fa fa-check-square"></i> Tasks</Link>
				<Link to = "/api/advisor" ><i className="fa fa-user-plus"></i> Advisor</Link>

			</div>
			
		</div>
	
	);
}

export default Home;