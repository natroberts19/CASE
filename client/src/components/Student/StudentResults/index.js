import React from 'react';
import "./style.css";
import VertPanel from "../VertPanel";

const StudentResults = props => (

    <VertPanel

    legend="Results"
        resultsHeader1="Student"
            rowHead="Student Id: "
            rowData={props.newStudent.studentId} 

        resultsHeader2="Schedule"
            rowHead="Program:" 
            rowData={props.newStudent.program}
                  
        resultsHeader3="Advisement"
            rowHead="High Level of Education:"
            rowData={props.newStudent.highLevelEd}

    />
);

export default StudentResults;