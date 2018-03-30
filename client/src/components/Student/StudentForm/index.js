import React, { Component } from 'react';
import "./style.css";

class StudentForm extends Component {
    // Set the initial values of all the form fields (this.state.field).
    state = {
        studentId: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        program: "",
        schedule: "",
        campus: "",
        studentStatus: "",
        highLevelEd: "",
        goal: "",
        result: "",
        advisor: "",
        notes: "",
        files: "",
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
        <div className="container" id="studentForm"> 
            <form onSubmit={(event) => this.props.handleFormSubmit(event, this.state)}>
                <fieldset>
                    <div className="form-group">
                        <legend>Add New Student</legend>
                        <label for="demographics">Student:</label>
                        <input className="form-control" id="demoStudId" rows="1" placeholder="7-digit Student Id" name="studentId" value={this.state.studentId} onChange={this.handleInputChange} />
                        <br />
                        <input className="form-control" id="demoFirstName" rows="1" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                        <br />
                        <input className="form-control" id="demoLastName" rows="1" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                        <br />
                        <input className="form-control" id="demoPhone" rows="1" placeholder="Phone" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
                        <br />
                        <input className="form-control" id="demoEmail" rows="1" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleInputChange} />
                        <br />
                    </div>

                    <div className="form-group">
                        <label for="schedule">Schedule:</label>
                        <select className="form-control" id="schedProgram" name="program" value={this.state.program} onChange={this.handleInputChange}>
                            <option value="None">Choose a program:</option>
                            <option value="ABE">ABE</option>
                            <option value="GED">GED</option>
                            <option value="ESOL">ESOL</option>
                        </select>
                        <br />
                    
                        <select className="form-control" id="schedTime" name="schedule" value={this.state.schedule} onChange={this.handleInputChange}>
                            <option value="None">Choose a schedule:</option>
                            <option value="AM-1">Morning-1</option>
                            <option value="AM-2">Morning-2</option>
                            <option value="PM-1">Afternoon-1</option>
                            <option value="PM-2">Afternoon-2</option>
                        </select>
                        <br />

                        <select className="form-control" id="schedCampus" name="campus" value={this.state.campus} onChange={this.handleInputChange}>
                            <option value="None">Choose a campus:</option>
                            <option value="Main">Main</option>
                            <option value="Poinciana">Poinciana</option>
                            <option value="CHS">CHS</option>
                            <option value="KMS">KMS</option>
                        </select>
                        <br />

                        <select className="form-control" id="schedStatus" name="studentStatus" value={this.state.studentStatus} onChange={this.handleInputChange}>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                        <br />
                    </div>

                    <div className="form-group">
                        <label for="advise">Advisement:</label>
                        <select className="form-control" id="adviseLevel" name="highLevelEd" value={this.state.highLevelEd} onChange={this.handleInputChange}>
                            <option value="None">Choose highest level of education:</option>
                            <option value="less than than HS">HS Not Grad</option>
                            <option value="HS Grad">HS Grad</option>
                            <option value="Tech or Voc">Tech</option>
                            <option value="2-yr">2-yr</option>
                            <option value="4-yr">4-yr</option>
                            <option value="Masters">Masters</option>
                        </select>
                        <br />
                        <select className="form-control" id="adviseGoal" name="goal" value={this.state.goal} onChange={this.handleInputChange}>
                            <option value="None">Choose student goal:</option>
                            <option value="Improve English">Improve Eng</option>
                            <option value="GED">GED</option>
                            <option value="Tech or Voc">Tech</option>
                            <option value="College">College</option>
                            <option value="Employment">Employment</option>
                            <option value="Job Promotion">Job Promotion</option>
                        </select>
                        <br />
                        <select className="form-control" id="adviseResult" name="result" value={this.state.result} onChange={this.handleInputChange}>
                            <option value="None">Choose student result:</option>
                            <option value="Level Increase">Improved Eng</option>
                            <option value="Attained GED">Got GED</option>
                            <option value="Enrolled Tech or Voc">Enrolled Tech</option>
                            <option value="Enrolled College">Enrolled College</option>
                            <option value="Obtained Employment">Got Employment</option>
                            <option value="Obtained Job Promotion">Got Job Promotion</option>
                        </select>
                        <br />
                        <select className="form-control" id="adviseAdvisor" name="advisor" value={this.state.advisor} onChange={this.handleInputChange}>
                            <option value="None">Choose an advisor:</option>
                            <option value="Karen">Karen</option>
                            <option value="Diana">Diana</option>
                            <option value="Natalie">Natalie</option>
                        </select>
                        <br />
                        <input className="form-control" id="adviseNote" rows="3" placeholder="Enter notes here." name="notes" value={this.state.notes} onChange={this.handleInputChange} />
                        <br />
                    </div>

                    <div className="form-group">
                        <input type="file" className="form-control-file" id="inputFile" aria-describedby="fileHelp" />
                        <small id="fileHelp" className="form-text text-muted">is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
                        </small>
                    </div>

                    <button type="submit" className="btn btn-primary" id="newStudent">Submit</button>
                </fieldset>
            </form>
        </div>
    )
    }
}

export default StudentForm;