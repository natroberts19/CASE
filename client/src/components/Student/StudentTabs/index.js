// -----------------------------------------------------------------------------------------------------------
// StudentTabs is the component with tabs for each section of the Student page.
// Has conditional rendering to display the student action (Search, Add New) based on the tab that is clicked.
// This component imports into the Student page.
// -----------------------------------------------------------------------------------------------------------

import React from 'react';
import "./style.css";

const StudentTabs = (props) => {
	return(

		<ul className="nav nav-tabs nav-fill">
			<li 
				onClick={() => props.handlePageChange("SearchForm")}
				className={props.currentPage === "SearchForm" ? "active" : ""}
			>
				<a className="nav-link">Search Students</a>
			</li>
			<li 
				onClick={() => props.handlePageChange("StudentForm")}
				className={props.currentPage === "StudentForm" ? "active" : ""}
			>
				<a className="nav-link">Add New Students</a>
			</li>
			{/* <li 
				onClick={() => props.handlePageChange("StudentResults")}
				className={props.currentPage === "StudentResults" ? "active" : ""}
			>
				<a className="nav-link">Results</a>
			</li> */}
		</ul>
		
		

	);
}

export default StudentTabs;