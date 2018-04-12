// -----------------------------------------------------------------------------------------------------------
// StudentResults is the component to hold the results Table from the StudentForm and SearchForm.
// This component imports into the Student page.
// *I now want it to import into Student Form and Search Form *
// -----------------------------------------------------------------------------------------------------------

import React, { Component } from 'react';
import "./style.css";
import Table from "../Table"

class StudentResults extends Component {

    render() {
        const {studentId, firstName, lastName, phone, email, program, schedule, campus, studentStatus, highLevelEd, goal, result, advisor, notes, files} = this.props.student;
        const student = [
            {rowheading: "Student Id:", data: studentId},
            {rowheading: "First Name:", data: firstName},
            {rowheading: "Last Name:", data: lastName},
            {rowheading: "Phone:", data: phone},
            {rowheading: "Email:", data: email}
        ];
        const schedules = [
            {rowheading: "Program:", data: program},
            {rowheading: "Schedule:", data: schedule},
            {rowheading: "Campus:", data: campus},
            {rowheading: "Status:", data: studentStatus}
        ];
        const advise = [
            {rowheading: "Education Level:", data: highLevelEd},
            {rowheading: "Goal:", data: goal},
            {rowheading: "Result:", data: result},
            {rowheading: "Advisor:", data: advisor}
        ];

        const note = [
            {rowheading: "Add a note below:", data: notes}
        ];

        return(
            <div className="container" id="studentResults">
                    <div className="panel-body">

                        <Table header="Student" tableData={student} /> 
                        <p />
                        <Table header="Schedule" tableData={schedules} />
                        <p />
                        <Table header="Advisement" tableData={advise}/>
                        <p />
                        <Table header="Notes" tableData={note} />
                        
                        <div className="container" id="noteForm"> 
                            <form>
                                <fieldset>
                                    <div className="form-group">
                                        <input className="form-control" rows="3" name="studentNote" value='Ex. "Met to discuss upcoming job interview at Disney."' />
                                    </div>
                                    <button type="submit" className="btn btn-primary" id="studentNote">Submit</button>
                                </fieldset>
                            </form>
                        </div>
                         
                    </div>
            </div>
        );
    }       
}

export default StudentResults;