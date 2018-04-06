// ---------------------------------------------------------------------------------------------------------
// Dashboard is a page that contains the Jumbotron (announcements) and the Cards (snapshot views).
// This should be the default page view when a user logs in.
// Each page also includes the Navbar and Footer.
// ---------------------------------------------------------------------------------------------------------

import React from 'react';
import "./style.css";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import Footer from '../Footer';
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Dashboard = (props) =>{
	return (
		<div className="container" style={{"marginLeft":"200px"}}>
			<Navbar 
				// username={props.auth.username} 
				// handleLogout={props.handleLogout}
			/>
			<h2><i className="fa fa-dashboard"></i> Dashboard</h2><p />
			
			<Jumbotron />
			
			<div className="row">
				<div className="col">
					<div className="row panel-row">
						<div className="col">
						<Card 
							icon="fa fa-gear" 
							cardHeader="Tools"
							cardTitle="Tools"
							cardContent="Tools description here."
							cardLink1="https://www.remind.com/"
							cardLink1Name="Remind.com"
							cardLink2="https://calendly.com/"
							cardLink2Name="Calendly.com" />
						</div>
					</div>
				</div>

				<div className="col">
               		<div className="row panel-row">
                    	<div className="col">
						<Card 
							icon="fa fa-line-chart" 
							cardHeader="Reports"
							cardTitle="Your Students"
							list1="Active Students: 110"
							list2="Inctive Students: 62"
						/>
						
						</div>
					</div>
				</div>

				<div className="col">
               		<div className="row panel-row">
                    	<div className="col">
						<Card 
							icon="fa fa-user-plus" 
							cardHeader="Advisor"
							cardTitle="MSGO"
							list1="MSGO Goal: 25%"
							list2="MSGO Current: 23%"/>
						</div>
					</div>
				</div>
			</div>	
			<Sidenav />
          <Footer />	
		</div>
	);
}

export default Dashboard;