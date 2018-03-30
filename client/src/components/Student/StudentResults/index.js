import React from 'react';

const StudentResults = props => (

    <div id="form-results">
        <legend>Results</legend>
            <div className="panel-body">
        
                <table className="table table-hover" id='new-student-table1' className="panel-body">
                <thead style={{'backgroundColor': 'rgb(2, 184, 117)'}}>
                    <tr>

                    <th colSpan="3">
                        <h5>{props.resultsHeader}</h5>
                    </th>

                    </tr>
                </thead>
                <tbody style={{'backgroundColor' : 'whitesmoke'}}>
                    
                <tr><td style={{'fontWeight': 'bold'}}> Student Id: </td><td> {props.newStudent.studentId} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>

                <tr><td style={{'fontWeight': 'bold'}}> First Name: </td><td> {props.newStudent.firstName} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>

                <tr><td style={{'fontWeight': 'bold'}}> Last Name: </td><td> {props.newStudent.lastName} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>

                <tr><td style={{'fontWeight': 'bold'}}> Phone: </td><td> {props.newStudent.phone} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>
                
                <tr><td style={{'fontWeight': 'bold'}}> Phone: </td><td> {props.newStudent.email} </td><td> <button type='submit' className='btn btn-primary' id='edit'>Edit</button></td></tr>

                </tbody>
                </table>
                <p />

                
                <table className="table table-hover" id='new-student-table2' className="panel-body">
                <thead style={{'backgroundColor': 'rgb(2, 184, 117)'}}>
                    <tr>
                    <th colSpan="3">
                        <h5>{props.resultsHeader}</h5>
                    </th>

                    </tr>
                </thead>
                <tbody style={{'backgroundColor' : 'whitesmoke'}}>
                    
                {props.newStudent.program}
                {props.newStudent.schedule}
                {props.newStudent.campus}
                {props.newStudent.studentStatus}
                  
                </tbody>
                </table>

        
                <table className="table table-hover" id='new-student-table3' className="panel-body">
                <thead style={{'backgroundColor': 'rgb(2, 184, 117)'}}>
                    <tr>
                    <th colSpan="3">
                        <h5>{props.resultsHeader}</h5>
                    </th>

                    </tr>
                </thead>
                <tbody style={{'backgroundColor' : 'whitesmoke'}}>
                    
                {props.newStudent.highLevelEd}
                {props.newStudent.goal}
                {props.newStudent.result}
                {props.newStudent.advisor}
                {props.newStudent.notes}
                {props.newStudent.files}
                
                </tbody>
                </table>

        </div>
    </div>

);

export default StudentResults;