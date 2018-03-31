import React from 'react';
import "./style.css";

const ReportTabs = (props) => {
	return(

		<ul className="nav nav-tabs">
			<li
			onClick={() => props.handlePageChange("MyActiveReport")}
			className={props.currentPage === "MyActiveReport" ? "active" : ""}
			>
			<a>My Active Students</a>
			</li>
			<li
			onClick={() => props.handlePageChange("MyInactiveReport")}
			className={props.currentPage === "MyInactiveReport" ? "active" : ""}
			>
			<a>My Inactive Students</a>
			</li>
			<li
			onClick={() => props.handlePageChange("MyAllReport")}
			className={props.currentPage === "MyAllReport" ? "active" : ""}
			>
			<a>All My Students</a>
			</li>
			<li
			onClick={() => props.handlePageChange("AllReport")}
			className={props.currentPage === "AllReport" ? "active" : ""}
			>
			<a>All CASE Students</a>
			</li>
		</ul>	

	);
}

export default ReportTabs;