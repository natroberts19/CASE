import React from 'react';
import "./style.css";

const TableStudent = (props) => {
	return(
		<table className="table table-hover" id='new-student-table1' className="panel-body">
			<thead>
				<tr>
				<th colSpan="3">
					<h5>{props.resultsHeader1}</h5>
				</th>
				</tr>
			</thead>
                
			<tbody>    
				<tr><td id="tdRowHead"> {props.rowHead1} </td><td> {props.newStudent.studentId} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>
				<tr><td id="tdRowHead"> {props.rowHead2} </td><td> {props.newStudent.firstName} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>
				<tr><td id="tdRowHead"> {props.rowHead3} </td><td> {props.newStudent.lastName} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>
				<tr><td id="tdRowHead"> {props.rowHead4} </td><td> {props.newStudent.phone} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>
				<tr><td id="tdRowHead"> {props.rowHead5} </td><td> {props.newStudent.email} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>
			</tbody>
        </table>
	);
}

export default TableStudent;