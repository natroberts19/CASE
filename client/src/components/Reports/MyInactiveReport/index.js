// --------------------------------------------------------------------------------------------------------------------------
// This report contains a table of students with a status of Inactive assigned to the logged in advisor. Sorted by last name.
// This component imports into the Reports page.
// --------------------------------------------------------------------------------------------------------------------------


import React, {Component} from 'react';
import ReportsAPI from "../../../utils/ReportsAPI";
import "./style.css";

class MyInactiveReport extends Component {
	
	state = {
		students: [],
	};

	componentDidMount() {
		this.loadMyInactiveReport();
	}

	loadMyInactiveReport = () => {
		console.log("load my active report");
		ReportsAPI.getMyInactiveReport()
		.then(res =>
			this.setState({ students: res.data })
		)
		.catch(err => console.log(err));
	}

	render() {
		return(
		<div>
			<h5>My Inactive Students</h5>
				<table className="table table-hover" id="results">
					<thead>
						<tr className="table-success" style={{'color' : 'black'}}>
							<th scope="col" id="studentId">Student Id</th>
							<th scope="col" id="lastName">Last Name</th>
							<th scope="col" id="firstName">First Name</th>
							<th scope="col" id="phone">Phone</th>
							<th scope="col" id="email">Email</th>
							<th scope="col" id="status">Status</th>
							<th scope="col" id="advisor">Advisor</th>
						</tr>
					</thead>
					
					{this.state.students.length ? (
						<tbody>
							{this.state.students.map(student => (
								<tr key={student._id}>
								<td>{student.studentId}</td>
								<td>{student.lastName}</td>
								<td>{student.firstName}</td>
								<td>{student.phone}</td>
								<td>{student.email}</td>
								<td>{student.studentStatus}</td>
								<td>{student.advisor}</td>
								</tr>
							))}
						</tbody>
					) : (
						<tbody><tr><td> No results to display! </td></tr></tbody>
					)}
				</table>
			</div>
	);
}
}

export default MyInactiveReport;