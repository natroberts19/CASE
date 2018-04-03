// --------------------------------------------------------------------------------------------------------------
// ReportTabs is a component that contains the Tabs for each student report (MyActive, MyInactive, MyAll, and All.
// Has conditional rendering to display the report based on the tab that is clicked.
// This component imports into the Reports page.
// --------------------------------------------------------------------------------------------------------------

import React from 'react';
import "./style.css";

const ReportTabs = (props) => {
	return(

		<ul className="nav nav-pills nav-fill">
			<li 
				onClick={() => props.handlePageChange("MyActiveReport")}
				className={props.currentPage === "MyActiveReport" ? "active" : ""}
			>
				<a className="nav-link">My Active Students</a>
			</li>
			<li 
				onClick={() => props.handlePageChange("MyInactiveReport")}
				className={props.currentPage === "MyInactiveReport" ? "active" : ""}
			>
				<a className="nav-link">My Inactive Students</a>
			</li>
			<li 
				onClick={() => props.handlePageChange("MyAllReport")}
				className={props.currentPage === "MyAllReport" ? "active" : ""}
			>
				<a className="nav-link">All My Students</a>
			</li>
			<li 
				onClick={() => props.handlePageChange("AllReport")}
				className={props.currentPage === "AllReport" ? "active" : ""}
			>
				<a className="nav-link">All CASE Students</a>
			</li>
		</ul>	

	);
}

export default ReportTabs;