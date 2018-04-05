import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Table = (props) => {
	return(
		<table className="table table-hover" className="panel-body">
			<thead>
				<tr>
					<th colSpan="3">
						<h5>{props.header}</h5>
					</th>
				</tr>
			</thead>
			
			<tbody>
				{/* <tr>
					<td> {props.rowHead6} </td>
					<td> {props.newStudent.program} </td>
					<td> <button type='submit' className='btn btn-primary'>Edit</button></td>
					</tr>
				<tr>
					<td> {props.rowHead7} </td>
					<td> {props.newStudent.schedule} </td>
					<td> <button type='submit' className='btn btn-primary'>Edit</button></td>
					</tr>
				<tr>
					<td> {props.rowHead8} </td>
					<td> {props.newStudent.campus} </td>
					<td> <button type='submit' className='btn btn-primary'>Edit</button></td>
					</tr>
				<tr>
					<td> {props.rowHead9} </td>
					<td> {props.newStudent.studentStatus} </td>
					<td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td>
					</tr> */}
			</tbody>
        </table> 
	);
}

export default Table;