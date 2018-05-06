import React, { Component } from 'react';
import "./style.css";
import StudentResults from "../StudentResults";
import axios from "axios";

class SearchForm extends Component {
    state = {
        search: "",
        // message: "Student Id does not exist, try again!"
    };

    // Handle changes to the input fields:
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // Handle the search form submit. Get student values. * Need Error handling *
    handleSearchSubmit = (event, searchValues) => {
        console.log("SearchForm handleSearchSubmit studentId: ", searchValues.studentId);
        console.log("SearchForm handleSearchSubmit note: ", searchValues.notes);
        event.preventDefault();

        axios.get(`/api/students/search/${searchValues.studentId}`)
            .then((results) => {
                console.log("SearchForm get search results: ", results);
                console.log("SearchForm get note results: ", results.data.notes);
                this.setState({
                    student: results.data,
                    notes: results.data.notes
                });

            }).catch((err) => {
                console.log(err);
            });

            this.setState({
                studentId: ""
            });
    }

    render() {
        return (

            <div className="container">

                <div className="row panel-row">
                    <div className="container" id="searchForm">
                        <form onSubmit={(event) => this.handleSearchSubmit(event, this.state)}>
                            <fieldset>
                                <div className="form-group">
                                    <legend><i class="fa fa-search"></i> Search</legend>
                                    <hr />
                                    <label HTMLfor="search">Enter 7-digit id:</label>
                                    <input className="form-control" id="searchStudId" rows="1" name="studentId" value={this.state.studentId} onChange={this.handleInputChange} />
                                </div>
                                <button type="submit" className="btn btn-primary" id="existingStudent">Search</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <p />


                <div className="row panel-row">
                    <div className="container" id="studentForm">
                        <legend><i class="fa fa-edit"></i> Results</legend>
                        <hr />

                        {
                            this.state.student ? <StudentResults 
                                                    student={this.state.student} 
                                                    notes={this.state.notes}/> 
                                                : <h3> {this.state.message} </h3>

                        }


                    </div>
                </div>
            </div>


        )
    }
}


export default SearchForm;