import React from 'react';
import "./style.css";

const TableSchedule = (props) => {
	return(
		<table className="table table-hover" id='new-student-table2' className="panel-body">
			<thead>
				<tr>
					<th colSpan="3">
						<h5>{props.resultsHeader2}</h5>
					</th>
				</tr>
			</thead>
			
			<tbody>
				<tr>
					<td id="tdRowHead"> {props.rowHead6} </td>
					<td> {props.newStudent.program} </td>
					<td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td>
					</tr>
				<tr>
					<td id="tdRowHead"> {props.rowHead7} </td>
					<td> {props.newStudent.schedule} </td>
					<td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td>
					</tr>
				<tr>
					<td id="tdRowHead"> {props.rowHead8} </td>
					<td> {props.newStudent.campus} </td>
					<td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td>
					</tr>
				<tr>
					<td id="tdRowHead"> {props.rowHead9} </td>
					<td> {props.newStudent.studentStatus} </td>
					<td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td>
					</tr>
			</tbody>
        </table> 
	);
}

export default TableSchedule;