// ---------------------------------------------------------------------------------------------------------
// Advisor is a page that contains a Jumbotron section with an informational description of MSGO.
// ---------------------------------------------------------------------------------------------------------

import React from 'react';
import "./style.css";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import Footer from '../Footer';
// import Jumbotron from "./Jumbotron";
// import Card from "./Card";

const Advisor = (props) =>{
	return (
		<div className="container" style={{"marginLeft":"200px"}}>
			<Navbar 
				// username={props.auth.username} 
				// handleLogout={props.handleLogout}
			/>
			<h2><i className="fa fa-user-plus"></i> Advisor</h2><p />
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

export default Advisor;