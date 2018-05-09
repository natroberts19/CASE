// -----------------------------------------------------------------------------------------------------------
// Table is the structure component that holds the results of the StudentForm and SearchForm.
// This component imports into the StudentResults page.
// -----------------------------------------------------------------------------------------------------------

import React from 'react';
import "./style.css";

const Table = ({header, tableData}) => {
	
	return(
		<div className = "container">
			<table className="table table-hover" className="panel-body">
				<thead>
					<tr>
						<th colSpan="2">
							<h5>{header}</h5>
						</th>
					</tr>
				</thead>
				
				<tbody>
					
				{tableData.map(row => (
					<tr>
						<td key={row._id} id="tdRowHead">{row.rowheading}</td>
						<td>{row.data}</td>
						{/* <td><button className="btn btn-primary btn-sm">Edit</button></td> */}
					</tr>		
				))}
				</tbody>
			</table> 
		</div>
	)
}

export default Table;