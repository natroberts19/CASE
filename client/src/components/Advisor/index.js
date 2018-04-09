// ---------------------------------------------------------------------------------------------------------
// Advisor is a page that contains a card section with an informational description of MSGO and 
// details of advisor MSGO status.
// ---------------------------------------------------------------------------------------------------------

import React, {Component} from 'react';
import "./style.css";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import Footer from '../Footer';
import AdvisorsAPI from '../../utils/AdvisorsAPI';

class Advisor extends Component {

state = {
	countmyall: [],
	countmsgoresult: []
};

componentDidMount() {
	this.loadCountMyAll();
	this.loadCountMSGOResult();
}

loadCountMyAll = () => {
	console.log("load my total of all students");
	AdvisorsAPI.getCountMyAll()
	.then(res =>
		this.setState({ countmyall: res.data })
	)
	.catch(err => console.log(err));
}

loadCountMSGOResult = () => {
	console.log("load my total of students with a result");
	AdvisorsAPI.getCountMSGOResult()
	.then(res =>
		this.setState({ countmsgoresult: res.data })
	)
	.catch(err => console.log(err));
}

render() {

	return (
		
		<div className="container" style={{"marginLeft":"200px"}}>
			<Navbar 
				// username={props.auth.username} 
				// handleLogout={props.handleLogout}
			/>
			<h2><i className="fa fa-user-plus"></i> Advisor</h2><p />
				<div className="card">
					<div className="card-header">
						Featured
					</div>
					<div className="card-body">
						<h5 className="card-title">Understanding the Measurable Student Growth Outcome (MSGO)</h5>
						<hr />
						<p className="card-text">Part of an advisor's annual evaluation is based on a criterion known as Measurable Student Growth Outcome (MSGO). A successful MSGO is based on whether adult students that we advise advance in their education or career goals. A target percentage is established at the beginning of the evaluation period.</p>
						<p>There are three categories of successful advancement or "exit" that qualify:
						<ul>
							<li>Test score attainment (GED or English level).</li>
							<li>New job or promotion in current job.</li>
							<li>Enrollment in post-secondary institution (college or voc-tech) or training program (ex. Career Source or Community Vision).</li>
						</ul>
						</p>
						<h5>How is MSGO Calculated?</h5>
						<hr />
							<div style={{"fontWeight" : "bold", "color" : "blue"}}> MSGO = Total of students who advance / Total of students assisted </div>
						<p>The total of students who advance is based on attaining one of the three exit categories listed above. The total of students assisted is based on the total number of active and inactive students advised during the review period.</p>

						<a href="#" className="btn btn-primary">Your MSGO Details</a>
					</div>
					<ul>
						<li>Your MSGO Result Count = {this.state.countmsgoresult}</li>
						<li>Your Total Students = {this.state.countmyall}</li>
						<li>Your MSGO percentage = {}</li>
					</ul>
				</div>	
			<Sidenav />
          <Footer />	
		</div>
	);
}
}

export default Advisor;