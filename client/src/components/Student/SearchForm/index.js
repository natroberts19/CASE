import React, { Component } from 'react';
import "./style.css";
// import StudentResults from "../StudentResults"

class SearchForm extends Component {
// Set the initial values of all the form fields (this.state.field).
	state = {
		search: "",
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
		<div className="row">
			<div className="col">
				<div className="row panel-row">
					<div className="col">
                        <div className="container" id="searchForm"> 
                            <form onSubmit={(event) => this.props.handleSearchSubmit(event, this.state)}>
                                <fieldset>
                                    <div className="form-group">
                                        <legend><i class="fa fa-search"></i> Search</legend>
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

                        {/* <StudentResults /> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


export default SearchForm;