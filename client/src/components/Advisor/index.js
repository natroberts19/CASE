// ---------------------------------------------------------------------------------------------------------
// Advisor is a page that contains a card section with an informational description of MSGO and 
// calculation details of advisor MSGO status.
// ---------------------------------------------------------------------------------------------------------

import React, { Component } from 'react';
import "./style.css";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import Footer from '../Footer';
import AdvisorsAPI from '../../utils/AdvisorsAPI';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

class Advisor extends Component {
	state = {
		countmyall: [],
		countmsgoresult: [],
		msgo: []
	};

	componentDidMount() {
		this.loadCountMyAll();
		this.loadCountMSGOResult();
	}

	loadCountMyAll = () => {
		console.log("Advisor, API get count of all my students.");
		AdvisorsAPI.getCountMyAll()
		.then(res =>
			this.setState({ countmyall: res.data })
		)
		.catch(err => console.log(err));
	}

	loadCountMSGOResult = () => {
		console.log("Advisor, API get total of students with a MSGO result.");
		AdvisorsAPI.getCountMSGOResult()
		.then(res =>
			this.setState({ countmsgoresult: res.data })
		)
		.catch(err => console.log(err));
	}

	render() {
		// The following calculates the MSGO success percentage based on students advancing and pre-set goal.
		let percent;
		let goal = parseInt(40, 10);
		let progress;
		const result = parseInt(this.state.countmsgoresult, 10);
		const all = parseInt(this.state.countmyall, 10);
		if (all !== 0) {

			percent = ((result / all) * 100).toFixed(2);
			progress = ((percent / goal) * 100);
			console.log("Progress calculation: ", progress);
		} else {
			percent = "0"
		}
		percent = percent + "%";
		return (
			<div className="container" style={{ "marginLeft": "165px" }}>
				<Navbar
					username={this.props.auth.username}
					handleLogout={this.props.handleLogout}
				/>
				<h2><i className="fa fa-user-plus"></i> Advisor</h2><p />
				<div className="card">
					<div className="card-header">
						Measurable Student Growth Outcome (MSGO)
					</div>
					<div className="card-body">
						<h5 className="card-title">Understanding MSGO</h5>
						<hr />
						<p className="card-text">Part of an advisor's annual evaluation is based on a criterion known as Measurable Student Growth Outcome (MSGO). A successful MSGO is based on whether adult students that are advised advance in their education or career goals. A target percentage is established at the beginning of the evaluation period.
						</p>
						<h5>How is MSGO Calculated?</h5>
						<hr />
						<div style={{ "fontWeight": "bold", "color": "blue" }}> MSGO = Total of students who advance / Total of students assisted </div>
						<p>The total of students who advance is based on attaining one of the three exit categories: (1.) Test score attainment (GED or English level), (2.) New job or promotion in current job, or (3.) Enrollment in post-secondary institution or training program. This data is tracked in CASE using the Result field. Advisors will track a result when the student advances based on their goal. The total of students assisted is based on the total number of active and inactive students advised during the review period.</p>
						<p>Following is your current MSGO status:</p>
						<div className="card border-primary mb-3" id="advisor-card">
							Total Students Advancing = {this.state.countmsgoresult} <br />
							Total Students Assisted = {this.state.countmyall}
							<hr />
							MSGO Goal = 40% <br />
							MSGO Actual = {percent}
							<Progress 
								status= "success"
								percent={progress}
							/>
						</div>
					</div>
				</div>
				<Sidenav />
				<Footer />
			</div>
		);
	}
}

export default Advisor;