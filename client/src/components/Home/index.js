import React from 'react';
import "./style.css";
import Jumbotron from "../Jumbotron";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";

const Home = (props) =>{
	return (
		
		<div className="container">
			<Navbar username={props.auth.username} handleLogout={props.handleLogout}/>
			<Jumbotron />
			<Sidenav />

		</div>
		
	);
}

export default Home;