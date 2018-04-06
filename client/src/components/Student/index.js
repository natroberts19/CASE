// ------------------------------------------------------------------------------------------------
// Student is a page that contains the student SearchForm, new StudentForm and StudentResults for 
// searching for an existing student or posting a new student into the db.
// ------------------------------------------------------------------------------------------------

import React, { Component } from 'react';
import StudentForm from "./StudentForm";
import SearchForm from "./SearchForm";
import StudentResults from "./StudentResults"
import Sidenav from "../Sidenav";
import Navbar from "../Navbar";
import Footer from '../Footer';
import axios from 'axios';

class Student extends Component {
    // Set the initial values of all the form fields.
    state = {
        student: {}
    };

    // Handle the new student form submit. Post student values.
    handleFormSubmit = (event, formValues) => {
        console.log(formValues);
        event.preventDefault();
        
        axios.post("/api/students", formValues)
            .then((results)=>{ 
                console.log("post new student results:", results);
                this.setState({
                    student: results.data
                });
                
            }).catch((err)=>{
                console.log(err);
            });    
    }

    // Handle the search form submit. Get student values.
    handleSearchSubmit = (event, searchValues) => {
        console.log(searchValues);
        event.preventDefault();
        
        axios.post("/api/students/:id", searchValues)
            .then((results)=>{ 
                console.log("post search form results:", results);
                this.setState({
                    student: results.data
                });
                
            }).catch((err)=>{
                console.log(err);
            });
    }

render() {
    return(
        <div className="container" style={{"marginLeft":"200px"}}>

            <Navbar 
                // username={props.auth.username} 
                // handleLogout={props.handleLogout}
            />

            <h2><i className="fa fa-user"></i> Student</h2><p />
                <SearchForm
                    handleSearchSubmit={this.handleSearchSubmit}
                    handleInputChange={this.handleInputChange}
                /><p />
                <StudentForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                /><p />
                <StudentResults
                    student={this.state.student}
                />

            <Sidenav />
          <Footer />
        </div>
	);
}
	
}

export default Student;