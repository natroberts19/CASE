// ------------------------------------------------------------------------------------------------
// Student is a page that contains the student SearchForm, new StudentForm and StudentResults for 
// searching for an existing student or posting a new student into the db.
// ------------------------------------------------------------------------------------------------

import React, { Component } from 'react';
import StudentTabs from "./StudentTabs";
import StudentForm from "./StudentForm";
import SearchForm from "./SearchForm";
import Sidenav from "../Sidenav";
import Navbar from "../Navbar";
import Footer from '../Footer';
import axios from 'axios';
// import StudentResults from './StudentResults';

class Student extends Component {
    // Set the initial value of the tabs and values of all the form fields.
    state = {
        student: {},
        currentPage: "SearchForm"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
      };

    renderPage = () => {
    if (this.state.currentPage === "SearchForm") {
        return <SearchForm handleSearchSubmit={this.handleSearchSubmit}/>;
    } else {
        return <StudentForm handleFormSubmit={this.handleFormSubmit}/>;
    }
    };

    // Handle the search form submit. Get student values. * Need Error handling *
    handleSearchSubmit = (event, searchValues) => {
        console.log(searchValues.studentId);
        event.preventDefault();
        
        axios.get(`/api/students/search/${searchValues.studentId}`)
            .then((results)=>{ 
                console.log("get search form results:", results);
                this.setState({
                    student: results.data
                });
                
            }).catch((err)=>{
                console.log(err);
            });
    }

    // Handle the edit button submit. Change student values.
        // handleEditSubmit = (event, editValues) => {
        //     console.log(editValues);
        //     event.preventDefault();
            
        //     axios.post("/api/students/:id", editValues)
        //         .then((results)=>{ 
        //             console.log("edit button results:", results);
        //             this.setState({
        //                 student: results.data
        //             });
                    
        //         }).catch((err)=>{
        //             console.log(err);
        //         });
        // }

render() {
    return(
        <div className="container" style={{"marginLeft":"200px"}}>

            <Navbar 
                username={this.props.auth.username} 
				handleLogout={this.props.handleLogout}
            />
        
            <h2><i className="fa fa-user"></i> Student</h2><p />
                <div className="container">
                    <StudentTabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                    />
                    <p />
                    {this.renderPage()}
                    
                </div>
                
                {/* <SearchForm
                    handleSearchSubmit={this.handleSearchSubmit}
                    handleInputChange={this.handleInputChange}
                /><p />
                <StudentForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                /><p />
                <StudentResults
                    student={this.state.student}
                    handleEditSubmit={this.handleEditSubmit}
                /> */}

            <Sidenav />
          <Footer />
        </div>
	);
}
	
}

export default Student;