// ---------------------------------------------------------------------------------------------------------
// Student is a page that contains the StudentForm and StudentResults for entering a new student into the db.
// This page also includes the Navbar and Footer.
// ---------------------------------------------------------------------------------------------------------

import React, { Component } from 'react';
import Navbar from "../Navbar";
import Footer from '../Footer';
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
            <h2><i className="fa fa-user"></i> Student</h2><p />
                <StudentForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                /><p />
                <StudentResults
                    newStudent={this.state.newStudent}
                />
        </div>
	);
}
	
}

export default Student;