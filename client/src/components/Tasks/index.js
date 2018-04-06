// ---------------------------------------------------------------------------------------------------------
// Tasks is a page that contains a to-do list of items for the logged in advisor.
// ---------------------------------------------------------------------------------------------------------

import React from 'react';
import "./style.css";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import Footer from '../Footer';

const Tasks = (props) =>{
	return (
		<div className="container" style={{"marginLeft":"200px"}}>
			<Navbar 
				// username={props.auth.username} 
				// handleLogout={props.handleLogout}
			/>
			<h2><i className="fa fa-check-square"></i> Tasks</h2><p />
				<div class="card">
					<div class="card-header">
						Featured
					</div>
					<div class="card-body">
						<h5 class="card-title">Special title treatment</h5>
						<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>	
			<Sidenav />
          <Footer />	
		</div>
	);
}

export default Tasks;