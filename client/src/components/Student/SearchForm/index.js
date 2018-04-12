import React, { Component } from 'react';
import "./style.css";
import StudentResults from "../StudentResults";
import axios from "axios";

class SearchForm extends Component {
// Set the initial values of all the form fields (this.state.field).
	state = {
        search: "",
        searchReset: ""
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
    console.log(searchValues.studentId);
    event.preventDefault();
    
    axios.get(`/api/students/search/${searchValues.studentId}`)
        .then((results)=>{ 
            console.log("get search form results:", results);
            this.setState({
                student: results.data,
                searchReset: ""
            });
            
        }).catch((err)=>{
            console.log(err);
        });
}

render() {
	return(
		<div className="row">
			<div className="col">
				<div className="row panel-row">
					<div className="col">
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
                </div>
            </div>
            <div className="col">
                <div className="row panel-row">
                    <div className="col">
                        <div className="container" id="studentForm"> 
                        <legend><i class="fa fa-edit"></i> Results</legend>
                        <hr />

                            { 
                                this.state.student ? <StudentResults student={this.state.student}/> : <h3> {this.state.message} </h3>
                                
                            }
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


export default SearchForm;