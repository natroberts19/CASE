// ---------------------------------------------------------------------------------------------------------
// Dashboard is a page that contains the Jumbotron (announcements) and the Cards (snapshot views of data).
// This should be the default page view when a user logs in.
// Each page also includes the Navbar and Footer.
// ---------------------------------------------------------------------------------------------------------

import React, {Component} from 'react';
import "./style.css";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import Footer from '../Footer';
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import AdvisorsAPI from "../../utils/AdvisorsAPI"
import StudentsAPI from "../../utils/StudentsAPI"

class Dashboard extends Component {

	state = {
		countmyactive: [],
		countmyinactive: [],
		countmyall: [],
		countkaren: [],
		countdiana: [],
		countabe: [],
		countged: [],
		countesol: []
	};

	componentDidMount() {
		this.loadCountMyActive();
		this.loadCountMyInactive();
		this.loadCountMyAll();
		this.loadCountKarenActive();
		this.loadCountDianaActive();
		this.loadCountABE();
		this.loadCountGED();
		this.loadCountESOL();
	}

	loadCountMyActive = () => {
		console.log("load my count of active students");
		AdvisorsAPI.getCountMyActive()
		.then(res =>
			this.setState({ countmyactive: res.data })
		)
		.catch(err => console.log(err));
	}

	loadCountMyInactive = () => {
		console.log("load my count of inactive students");
		AdvisorsAPI.getCountMyInactive()
		.then(res =>
			this.setState({ countmyinactive: res.data })
		)
		.catch(err => console.log(err));
	}

	loadCountMyAll = () => {
		console.log("load my total of all students");
		AdvisorsAPI.getCountMyAll()
		.then(res =>
			this.setState({ countmyall: res.data })
		)
		.catch(err => console.log(err));
	}

	loadCountKarenActive = () => {
		console.log("load Karen's count of active students");
		AdvisorsAPI.getCountKarenActive()
		.then(res =>
			this.setState({ countkaren: res.data })
		)
		.catch(err => console.log(err));
	}

	loadCountDianaActive = () => {
		console.log("load Diana's count of active students");
		AdvisorsAPI.getCountDianaActive()
		.then(res =>
			this.setState({ countdiana: res.data })
		)
		.catch(err => console.log(err));
	}

	loadCountABE = () => {
		console.log("load count of ABE students");
		StudentsAPI.getCountABE()
		.then(res =>
			this.setState({ countabe: res.data })
		)
		.catch(err => console.log(err));
	}

	loadCountGED = () => {
		console.log("load count of GED students");
		StudentsAPI.getCountGED()
		.then(res =>
			this.setState({ countged: res.data })
		)
		.catch(err => console.log(err));
	}

	loadCountESOL = () => {
		console.log("load count of ESOL students");
		StudentsAPI.getCountESOL()
		.then(res =>
			this.setState({ countesol: res.data })
		)
		.catch(err => console.log(err));
	}

render() {
	return (
		<div className="container" style={{"marginLeft":"200px"}}>
			<Navbar 
				username={this.props.auth.username} 
				handleLogout={this.props.handleLogout}
			/>
			<h2><i className="fa fa-dashboard"></i> Dashboard</h2><p />
			
			<Jumbotron />
			
			<div className="row">
				<div className="col">
					<div className="row panel-row">
						<div className="col">
						<Card 
							icon="fa fa-user" 
							cardHeader="Student"
							cardTitle="Program Stats"
							cardContent="Total number of CASE students by program."
							label1="ABE: "
							list1={this.state.countabe}
							label2="GED: "
							list2={this.state.countged}
							label3="ESOL: "
							list3={this.state.countesol}
						/>
						
						</div>
					</div>
				</div>

				<div className="col">
               		<div className="row panel-row">
                    	<div className="col">
						<Card 
							icon="fa fa-line-chart" 
							cardHeader="Reports"
							cardTitle="My Students"
							cardContent="These are summary counts of all my students."
							label1="Active Students: "
							list1={this.state.countmyactive}
							label2="Inactive Students: "
							list2={this.state.countmyinactive}
							label3="Total Students: "
							list3={this.state.countmyall}
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
							cardTitle="Summary"
							cardContent="This is a summary of all active students by advisor."
							label1="Natalie:  "
							list1={this.state.countmyactive}
							label2="Karen:  "
							list2={this.state.countkaren}
							label3="Diana:  "
							list3={this.state.countdiana}
						/>
						</div>
					</div>
				</div>
			</div>	
			<Sidenav />
          <Footer />	
		</div>
	);
}
}

export default Dashboard;