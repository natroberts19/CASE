// ---------------------------------------------------------------------------------------------------------
// Student is a page that contains the student SearchForm, new StudentForm and StudentResults for entering 
// searching for an existing student or posting a new student into the db.
// ---------------------------------------------------------------------------------------------------------

import React, { Component } from 'react';
import StudentForm from "./StudentForm";
import SearchForm from "./SearchForm";
import StudentResults from "./StudentResults"
import axios from 'axios';

class Student extends Component {
    // Set the initial values of all the form fields.
    state = {
        newStudent: {}
    };

    // Handle the new student form submit. Post student values.
    handleFormSubmit = (event, formValues) => {
        console.log(formValues);
        event.preventDefault();
        
        axios.post("/api/students", formValues)
            .then((results)=>{ 
                console.log("post new student results:", results);
                this.setState({
                    newStudent: results.data
                });
                
            }).catch((err)=>{
                console.log(err);
            });    
    }

    state = {
        existingStudent: {}
    };

    // Handle the search form submit. Get student values.
    handleSearchSubmit = (event, searchValues) => {
        console.log(searchValues);
        event.preventDefault();
        
        axios.post("/api/students/:id", searchValues)
            .then((results)=>{ 
                console.log("post search form results:", results);
                this.setState({
                    existingStudent: results.data
                });
                
            }).catch((err)=>{
                console.log(err);
            });
    }

render() {
    return(
        <div className="container">
            <h2><i className="fa fa-user"></i> Student</h2><p />
                <SearchForm
                    handleSearchSubmit={this.handleSearchSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <StudentForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                /><p />
                <StudentResults
                    newStudent={this.state.newStudent}
                    existingStudent={this.state.existingStudent}
                />
        </div>
	);
}
	
}

export default Student;