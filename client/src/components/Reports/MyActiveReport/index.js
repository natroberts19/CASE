// ------------------------------------------------------------------------------------------------------------------------
// This report contains a table of students with a status of Active assigned to the logged in advisor. Sorted by last name.
// This report is the default tab that appears when the user clicks the Reports page.
// This component imports into the Reports page.
// ------------------------------------------------------------------------------------------------------------------------

import React from 'react';
import "./style.css";

const MyActiveReport = (props) => {
	return(
		<div>
			<h5>My Active Students</h5>
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
					<tbody>
					<tr><td>1234567</td>
						<td>Smith</td>
						<td>John</td>
						<td>407-555-1212</td>
						<td>jsmith@gmail.com</td>
						<td>Active</td>
						<td>Natalie</td></tr>
					<tr><td>3456987</td>
						<td>Torres</td>
						<td>Mary</td>
						<td>407-555-3434</td>
						<td>mtorres@gmail.com</td>
						<td>Active</td>
						<td>Natalie</td></tr>
						{/* <!-- Results from DB Query here. Showing two hard code examples for now. --> */}

					</tbody>
				</table>
		</div>
	);
}

export default MyActiveReport;