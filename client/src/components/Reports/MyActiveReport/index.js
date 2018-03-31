import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const MyActiveReport = (props) => {
	return(
		<div>
			<h5>All My Active Students</h5>
				<table className="table table-hover" id="results">
					<thead>
						<tr className="table-success">
							<th scope="col" id="studentId">Student Id</th>
							<th scope="col" id="lastName">Last Name</th>
							<th scope="col" id="firstName">First Name</th>
							<th scope="col" id="phone">Phone</th>
							<th scope="col" id="email">Email</th>
							<th scope="col" id="status">Status</th>
							<th scope="col" id="advisor">Advisor</th>
						</tr>
					</thead>
					<tbody>
					<tr><td>1234567</td>
						<td>Smith</td>
						<td>John</td>
						<td>407-555-1212</td>
						<td>jsmith@gmail.com</td>
						<td>Active</td>
						<td>Natalie</td></tr>
						{/* <!-- Results from DB Query here --> */}

					</tbody>
				</table>
		</div>
	);
}

export default MyActiveReport;