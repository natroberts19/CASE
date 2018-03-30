import React, { Component } from 'react';
import "./style.css";
import VertPanel from "../VertPanel";

class StudentResults extends Component {
state = {
    studentData: {
        studentId: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        program: "",
        schedule: "",
        campus: "",
        studentStatus: "",
        highLevelEd: "",
        goal: "",
        result: "",
        advisor: "",
        notes: "",
        files: "",
    }
};

render() {
    return(
        <VertPanel

        legend="Results"
            resultsHeader1="Student"
                rowHead1="Student Id:"
                rowHead2="First Name:"
                rowHead3="Last Name:"
                rowHead4="Phone:"
                rowHead5="Email:"
            resultsHeader2="Schedule"
                rowHead6="Program:"
                rowHead7="Schedule:"
                rowHead8="Campus:"
                rowHead9="Status:"
            resultsHeader3="Advisement"
                rowHead10="Highest Level of Education:"
                rowHead11="Goal:"
                rowHead12="Result:"
                rowHead13="Advisor:"
                rowHead14="Notes:"
                rowHead15="Files:"
    
                newStudent={ this.state.studentData }

        />
    );
    }    
}


export default StudentResults;