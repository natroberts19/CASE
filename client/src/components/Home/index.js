import React from 'react';
import "./style.css";
import Jumbotron from "../Jumbotron";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import Card from "../Card";
import Student from "../Student";


const Home = (props) =>{
	return (
		
		<div className="container" style={{"marginLeft":"200px"}}>
			<Navbar username={props.auth.username} handleLogout={props.handleLogout}/>
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
							icon="fa fa-industry" 
							cardHeader="Reports"
							cardTitle="MSGO Status"
							cardContent="MSGO description here."
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
							cardTitle="Summary"
							cardContent="Advisor Summary description here."
							cardLink1="#"
							cardLink1Name="Link1 Name"
							cardLink2="#"
							cardLink2Name="Link2 Name"/>
						</div>
					</div>
				</div>
			</div>

			<Student />
			
			<Sidenav />

		</div>
		
	);
}

export default Home;