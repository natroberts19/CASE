// -----------------------------------------------------------------------------------------------------------
// StudentResults is the component to hold the results Table from the StudentForm and SearchForm.
// This component imports into the Student page.
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
            {rowheading: "Advisor:", data: advisor},
            {rowheading: "Notes:", data: notes},
            {rowheading: "Files:", data: files}
        ];

        return(
            <div className="container" id="studentResults">
                <legend><i class="fa fa-edit"></i> Results</legend>
                    <div className="panel-body">

                        <Table header="Student" tableData={student} /> 
                        <Table header="Schedule" tableData={schedules} />
                        <Table header="Advisement" tableData={advise}/>
                         
                    </div>
            </div>
        );
    }       
}

export default StudentResults;