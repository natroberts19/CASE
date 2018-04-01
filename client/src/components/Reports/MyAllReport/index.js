// -------------------------------------------------------------------------------------------------------------------------
// This report contains a table of all students (Active and Inactive) assigned to the logged in advisor. Sorted by last name.
// This component imports into the Reports page.
// -------------------------------------------------------------------------------------------------------------------------

import React from 'react';
import "./style.css";

const MyAllReport = (props) => {
	return(
		<div>
			<h5>All My Students</h5>
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
						<tr><td></td></tr>
						{/* <!-- Results from DB Query here --> */}

					</tbody>
				</table>
		</div>
	);
}

export default MyAllReport;