import React, { Component } from 'react';
import StudentForm from "./StudentForm";
import StudentResults from "./StudentResults"
import axios from 'axios';

class Student extends Component {
    // Set the initial values of all the form fields (this.state.field).
    state = {
        // studentId: "",
        // firstName: "",
        // lastName: "",
        // phone: "",
        // email: "",
        // program: "",
        // schedule: "",
        // campus: "",
        // studentStatus: "",
        // highLevelEd: "",
        // goal: "",
        // result: "",
        // advisor: "",
        // notes: "",
        // files: "",
        newStudent: {}
    };

    // Handle changes to the input fields:
    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // Handle the form submit. Post student to the database.
    handleFormSubmit = (event, formValues) => {
        console.log(formValues);
        event.preventDefault();
         //call a newStudent function.
        // const newStudent = {
        //     studentId: this.state.studentId,
        //     firstName: this.state.firstName,
        //     lastName: this.state.lastName,
        //     phone: this.state.phone,
        //     email: this.state.email,
        //     program: this.state.program,
        //     schedule: this.state.schedule,
        //     campus: this.state.campus,
        //     studentStatus: this.state.studentStatus,
        //     highLevelEd: this.state.highLevelEd,
        //     goal: this.state.goal,
        //     result: this.state.result,
        //     advisor: this.state.advisor,
        //     notes: this.state.notes,
        //     files: this.state.files
        // };
        
        axios.post("/api/students", formValues)
            .then((results)=>{
            // this.setState({
            //     studentId: "",
            //     firstName: "",
            //     lastName: "",
            //     phone: "",
            //     email: "",
            //     program: "",
            //     schedule: "",
            //     campus: "",
            //     studentStatus: "",
            //     highLevelEd: "",
            //     goal: "",
            //     result: "",
            //     advisor: "",
            //     notes: "",
            //     files: "",
            // }); 

        });
        
    }

render() {
    return(
	
        <div className="container">
            <StudentForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
            />

            <StudentResults
                newStudent={this.state.newStudent}
            />

        </div>
	);
}
	
}

export default Student;