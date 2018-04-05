import React, { Component } from 'react';
import "./style.css";

class SearchForm extends Component {
// Set the initial values of all the form fields (this.state.field).
	state = {
		studentId: "",
		firstName: "",
		lastName: "",
	};

// Handle changes to the input fields:
handleInputChange = event => {
	const { name, value } = event.target;
	this.setState({
		[name]: value
	});
};

render() {
	return(
		<div className="container" id="searchForm"> 
            <form onSubmit={(event) => this.props.handleSearchSubmit(event, this.state)}>
                <fieldset>
                    <div className="form-group">
                        <legend><i class="fa fa-search"></i> Student Search</legend>
						<p> Include one or more of the following: </p>
                        <hr />
                        <h6>Student</h6>
                        <label HTMLfor="search">7-digit Id:</label>
                        <input className="form-control" id="searchStudId" rows="1" name="studentId" value={this.state.studentId} onChange={this.handleInputChange} />
                        <label HTMLfor="search">First Name:</label>
                        <input className="form-control" id="searchFirstName" rows="1" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                        <label HTMLfor="search">Last Name:</label>
						<input className="form-control" id="searchLastName" rows="1" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
						</div>
                    <hr />

					<button type="submit" className="btn btn-primary" id="existingStudent">Search</button>
                </fieldset>
            </form>
        </div>
    )
  }
}


export default SearchForm;