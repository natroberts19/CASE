import React from 'react';
import "./style.css";

const TableAdvise = (props) => {
	return(
		<table className="table table-hover" id='new-student-table3' className="panel-body">
			<thead>
				<tr>
				<th colSpan="3">
					<h5>{props.resultsHeader3}</h5>
				</th>
				</tr>
			</thead>
			
			<tbody>
				<tr><td id="tdRowHead"> {props.rowHead10} </td><td> {props.newStudent.highLevelEd} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>
				<tr><td id="tdRowHead"> {props.rowHead11} </td><td> {props.newStudent.goal} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>
				<tr><td id="tdRowHead"> {props.rowHead12} </td><td> {props.newStudent.result} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>
				<tr><td id="tdRowHead"> {props.rowHead13} </td><td> {props.newStudent.advisor} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>
				<tr><td id="tdRowHead"> {props.rowHead14} </td><td> {props.newStudent.notes} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>
				<tr><td id="tdRowHead"> {props.rowHead15} </td><td> {props.newStudent.files} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>
			</tbody>
        </table>
	);
}

export default TableAdvise;