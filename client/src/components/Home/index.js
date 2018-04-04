// Home is the "wrapper" for each of the page components (Dashboard, Student, Reports, ToDo, Advisor). Home includes the top navbar, side nav bar, and the footer.

import React from 'react';
import "./style.css";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import Footer from '../Footer';
// Page components will render inside Home as they are called from the Sidenav!
// import Dashboard from "../Dashboard"
// import Student from "../Student";
import Reports from "../Reports";

const Home = (props) =>{
	return (
		<div className="container" style={{"marginLeft":"200px"}}>
			<Navbar 
				username={props.auth.username} 
				handleLogout={props.handleLogout}
			/>

			<Reports />
			
			<Sidenav />
			<Footer />
			
		</div>
		
		
	);
}

export default Home;