import React, { Component } from 'react';
import StudentForm from "./StudentForm";
import StudentResults from "./StudentResults"
import axios from 'axios';

class Student extends Component {
    // Set the initial values of all the form fields.
    state = {
        newStudent: {}
    };


    // Handle the form submit. Post student values.
    handleFormSubmit = (event, formValues) => {
        console.log(formValues);
        event.preventDefault();
        
        axios.post("/api/students", formValues)
            .then((results)=>{ 
                console.log("post results:", results);
                this.setState({
                    newStudent: results.data
                });
                
            }).catch((err)=>{
                console.log(err);
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