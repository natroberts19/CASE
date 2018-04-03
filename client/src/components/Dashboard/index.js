// ---------------------------------------------------------------------------------------------------------
// Dashboard is a page that contains the Jumbotron (announcements) and the Cards (snapshot views).
// This should be the default page view when a user logs in.
// Each page also includes the Navbar and Footer.
// ---------------------------------------------------------------------------------------------------------

import React from 'react';
import "./style.css";
// import Navbar from "../Navbar";
// import Footer from '../Footer';
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Dashboard = (props) =>{
	return (
		<div className="container">
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
							cardContent="110 Active Students. 62 Inactive Students."
							cardLink1="#"
							cardLink1Name="Link1 Name"
							cardLink2="#"
							cardLink2Name="Link2 Name" />
						
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
							cardContent="Your MSGO goal is 25%. Your current MSGO level is 23%."
							cardLink1="#"
							cardLink1Name="Link1 Name"
							cardLink2="#"
							cardLink2Name="Link2 Name"/>
						</div>
					</div>
				</div>
			</div>		
		</div>
	);
}

export default Dashboard;