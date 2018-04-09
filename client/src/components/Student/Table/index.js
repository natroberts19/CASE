// -----------------------------------------------------------------------------------------------------------
// Table is the component to hold the results from the StudentForm and SearchForm.
// This component imports into the StudentResults page.
// -----------------------------------------------------------------------------------------------------------

import React from 'react';
import "./style.css";

const Table = ({header, tableData}) => {
	return(
		function TableData({ tableData }) {
			if (!tableData) {
				return <p> Please enter a valid 7-digit Id!</p>;
				console.log("invalid student id")
			} else {
				return (
					<table className="table table-hover" className="panel-body">
					<thead>
						<tr>
							<th colSpan="3">
								<h5>{header}</h5>
							</th>
						</tr>
					</thead>
					
					<tbody>
						
					{tableData.map(row => (
						<tr>
							<td id="tdRowHead">{row.rowheading}</td>
							<td>{row.data}</td>
							<td><button className="btn btn-primary btn-sm">Edit</button></td>
						</tr>		
					))}
					</tbody>
				</table> 
				)
			}
		}
		
	);
}

export default Table;