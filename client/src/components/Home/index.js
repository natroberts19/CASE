import React from 'react';
import "./style.css";
import Jumbotron from "../Jumbotron";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import Card from "../Card";

const Home = (props) =>{
	return (
		
		<div className="container" style={{"marginLeft":"200px"}}>
			<Navbar username={props.auth.username} handleLogout={props.handleLogout}/>
			<Jumbotron />
			
			<div className="row">
            	<div className="col">
               		<div className="row panel-row">
                    	<div className="col">
						<Card />
						</div>
					</div>
				</div>

				<div className="col">
               		<div className="row panel-row">
                    	<div className="col">
						<Card />
						</div>
					</div>
				</div>

				<div className="col">
               		<div className="row panel-row">
                    	<div className="col">
						<Card />
						</div>
					</div>
				</div>
			</div>
			
			
			<Sidenav />

		</div>
		
	);
}

export default Home;