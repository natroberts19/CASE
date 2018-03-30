import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

// I think I can do a switch case here.

const Sidenav = (props) => {
	return(			
			<div className="sidenav">
				<Link to = "/api/home" ><i className="fa fa-map-signs"></i> Dashboard</Link>
				<Link to = "/api/students" ><i className="fa fa-user"></i> Student</Link>
				<Link to = "/api/reports" ><i className="fa fa-industry"></i> Reports</Link>
				<Link to = "/api/tasks" ><i className="fa fa-check-square"></i> Tasks</Link>
				<Link to = "/api/advisor" ><i className="fa fa-user-plus"></i> Advisor</Link>

			</div>
	);
}

export default Sidenav;