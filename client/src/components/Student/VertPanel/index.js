import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const VertPanel = (props) => {
	return(
		<div className="container" id="studentResults">
        <legend>{props.legend}</legend>
            <div className="panel-body">
                <table className="table table-hover" id='new-student-table1' className="panel-body">
                <thead>
                    <tr>
                    <th colSpan="3">
                        <h5>{props.resultsHeader1}</h5>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    
                <tr><td id="tdRowHead"> {props.rowHead} </td><td> {props.rowData} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>
                </tbody>
                </table>
                <p />

                <table className="table table-hover" id='new-student-table2' className="panel-body">
                <thead>
                    <tr>
                    <th colSpan="3">
                        <h5>{props.resultsHeader2}</h5>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    
				<tr><td id="tdRowHead"> {props.rowHead} </td><td> {props.rowData} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>  
                </tbody>
                </table>
        
                <table className="table table-hover" id='new-student-table3' className="panel-body">
                <thead>
                    <tr>
                    <th colSpan="3">
                        <h5>{props.resultsHeader3}</h5>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    
				<tr><td id="tdRowHead"> {props.rowHead} </td><td> {props.rowData} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>
                </tbody>
                </table>
        </div>
    </div>
	);
}

export default VertPanel;