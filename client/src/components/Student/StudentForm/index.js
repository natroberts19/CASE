import React, { Component } from 'react';
import "./style.css";
import StudentResults from '../StudentResults';
import axios from 'axios';

class StudentForm extends Component {
// Set the initial values of all the form fields.
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
        notes: []
    };

// Handle changes to the input fields:
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

// Handle the new student form submit. Post student values.
   handleFormSubmit = (event, formValues) => {
    console.log("StudentForm, handleFormSubmit, formValues: ", formValues);
    event.preventDefault();
    
    axios.post("/api/students", formValues)
        .then((results)=>{ 
            console.log("StudentForm, axios post new student, results: ", results.data);
            this.setState({
                student: results.data
            });
            
        }).catch((err)=>{
            console.log(err);
        });    

        this.setState({
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
            notes: []
        });
    }

render() {
    return(
        <div className="row">
            <div className="col">
                <div className="row panel-row">
                    <div className="col">

                    {/* Input section of new student data below. */}
                        <div className="container" id="studentForm"> 
                            <form onSubmit={(event) => this.handleFormSubmit(event, this.state)}>
                                <fieldset>
                                    <div className="form-group">
                                        <legend><i className="fa fa-plus"></i> Add New</legend>
                                        <hr />
                                        <h6>Student</h6>
                                        <label htmlFor="demographics">7-digit Id:</label>
                                        <input className="form-control" id="demoStudId" rows="1" name="studentId" value={this.state.studentId} onChange={this.handleInputChange} />
                                        <label htmlFor="demographics">First Name:</label>
                                        <input className="form-control" id="demoFirstName" rows="1" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                                        <label htmlFor="demographics">Last Name:</label>
                                        <input className="form-control" id="demoLastName" rows="1" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                                        <label htmlFor="demographics">Phone:</label>
                                        <input className="form-control" id="demoPhone" rows="1" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
                                        <label htmlFor="demographics">Email:</label>
                                        <input className="form-control" id="demoEmail" rows="1" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                    </div>
                                    <hr />

                                    <div className="form-group">
                                        <h6>Schedule</h6>
                                        <label htmlFor="schedule">Program:</label>
                                        <select className="form-control" id="schedProgram" name="program" value={this.state.program} onChange={this.handleInputChange}>
                                            <option value="None">None</option>
                                            <option value="ABE">ABE</option>
                                            <option value="GED">GED</option>
                                            <option value="ESOL">ESOL</option>
                                        </select>
                                        <label htmlFor="schedule">Schedule:</label>
                                        <select className="form-control" id="schedTime" name="schedule" value={this.state.schedule} onChange={this.handleInputChange}>
                                            <option value="None">None</option>
                                            <option value="AM-1">Morning-1</option>
                                            <option value="AM-2">Morning-2</option>
                                            <option value="PM-1">Afternoon-1</option>
                                            <option value="PM-2">Afternoon-2</option>
                                        </select>
                                        <label htmlFor="schedule">Campus:</label>
                                        <select className="form-control" id="schedCampus" name="campus" value={this.state.campus} onChange={this.handleInputChange}>
                                            <option value="None">None</option>
                                            <option value="Main">Main</option>
                                            <option value="Poinciana">Poinciana</option>
                                            <option value="CHS">CHS</option>
                                            <option value="KMS">KMS</option>
                                        </select>
                                        <label htmlFor="schedule">Status:</label>
                                        <select className="form-control" id="schedStatus" name="studentStatus" value={this.state.studentStatus} onChange={this.handleInputChange}>
                                            <option value="None">None</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                    </div>
                                    <hr />

                                    <div className="form-group">
                                        <h6>Advisement</h6>
                                        <label htmlFor="advise">Level of Education:</label>
                                        <select className="form-control" id="adviseLevel" name="highLevelEd" value={this.state.highLevelEd} onChange={this.handleInputChange}>
                                            <option value="None">None</option>
                                            <option value="less than than HS">HS Not Grad</option>
                                            <option value="HS Grad">HS Grad</option>
                                            <option value="Tech or Voc">Tech</option>
                                            <option value="2-yr">2-yr</option>
                                            <option value="4-yr">4-yr</option>
                                            <option value="Masters">Masters</option>
                                        </select>
                                        <label htmlFor="advise">Goal:</label>
                                        <select className="form-control" id="adviseGoal" name="goal" value={this.state.goal} onChange={this.handleInputChange}>
                                            <option value="None">None</option>
                                            <option value="Improve English">Improve Eng</option>
                                            <option value="GED">GED</option>
                                            <option value="Tech or Voc">Tech</option>
                                            <option value="College">College</option>
                                            <option value="Employment">Employment</option>
                                            <option value="Job Promotion">Job Promotion</option>
                                        </select>
                                        <label htmlFor="advise">Result:</label>
                                        <select className="form-control" id="adviseResult" name="result" value={this.state.result} onChange={this.handleInputChange}>
                                            <option value="None">None</option>
                                            <option value="Improved Eng Level">Improved Eng Level</option>
                                            <option value="Got GED">Got GED</option>
                                            <option value="Enrolled Tech">Enrolled Tech</option>
                                            <option value="Enrolled College">Enrolled College</option>
                                            <option value="Got Employment">Got Employment</option>
                                            <option value="Got Job Promotion">Got Job Promotion</option>
                                        </select>
                                        <label htmlFor="advise">Advisor:</label>
                                        <select className="form-control" id="adviseAdvisor" name="advisor" value={this.state.advisor} onChange={this.handleInputChange}>
                                            <option value="None">None</option>
                                            <option value="Karen">Karen</option>
                                            <option value="Diana">Diana</option>
                                            <option value="Natalie">Natalie</option>
                                        </select>
                                    </div>

                                    <button type="submit" className="btn btn-primary" id="newStudent">Submit</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Render section of new student data below. */}
                <div className="col">
					<div className="row panel-row">
						<div className="col">
                            <div className="container" id="studentForm"> 
                            <legend><i className="fa fa-edit"></i> Results</legend>
                            <hr />

                            { 
                                this.state.student ? 
                                <StudentResults student={this.state.student}/> 
                                : null
                            }
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentForm;