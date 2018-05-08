// ------------------------------------------------------------------------------------------------
// Student is a page that contains the student SearchForm, new StudentForm and StudentResults for 
// searching for an existing student or posting a new student into the db.
// ------------------------------------------------------------------------------------------------

import React, { Component } from 'react';
import StudentTabs from "./StudentTabs";
import StudentForm from "./StudentForm";
import SearchForm from "./SearchForm";
// import StudentResults from './StudentResults';
// import SearchForm2 from "./SearchForm2";
// import SearchResults from "./SearchResults";
import Sidenav from "../Sidenav";
import Navbar from "../Navbar";
import Footer from '../Footer';
// import axios from 'axios';

class Student extends Component {
    // Set the initial value of the tabs and values of all the form fields.
    state = {
        search: "",
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

render() {
    return(
        <div className="container" style={{"marginLeft":"165px"}}>

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
            <p />
            <Sidenav />
          <Footer />
        </div>
	);
}
	
}

export default Student;