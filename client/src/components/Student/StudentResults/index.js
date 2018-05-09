// ------------------------------------------------------------------------------------------------------------------
// StudentResults is the component to hold the results Table from values entered into the StudentForm and SearchForm.
// This component imports into the StudentForm and SearchForm components.
// ------------------------------------------------------------------------------------------------------------------

import React, { Component } from 'react';
import "./style.css";
import Table from "../Table";
import axios from "axios";
import Notes from "../Notes"
// import NotesAPI from "../../../utils/NotesAPI"

class StudentResults extends Component {

state = {
    note: "",
    notes: []
};

// Handle changes to the note input field.
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

// Handles the note submit.
    handleNoteSubmit = (event, studentId, note) => {
        event.preventDefault();
        console.log("StudentResults note form value:", note);
        console.log("StudentResults note student value:", studentId);
        const newNote = {
            note
        }
        axios.post(`/api/notes/${studentId}`, newNote, note)
            .then((results)=>{ 
                console.log("StudentResults post newNote results:", newNote);
                console.log("StudentResults notes array:", results.data.notes);
                // this.setState({
                //     notes: results.data.notes
                // });

                const newState = this.state
                newState.notes.push(note);   
                
                newState.note = "";
                
                this.setState({
                    note: "",
                    newState
                });
                
            }).catch((err)=>{
                console.log(err);
            });          
        }


    render() {
        const {studentId, firstName, lastName, phone, email, program, schedule, campus, studentStatus, highLevelEd, goal, result, advisor, note} = this.props.student;
        const student = [
            {rowheading: "Student Id:", data: studentId},
            {rowheading: "First Name:", data: firstName},
            {rowheading: "Last Name:", data: lastName},
            {rowheading: "Phone:", data: phone},
            {rowheading: "Email:", data: email}
        ];
        const schedules = [
            {rowheading: "Program:", data: program},
            {rowheading: "Schedule:", data: schedule},
            {rowheading: "Campus:", data: campus},
            {rowheading: "Status:", data: studentStatus}
        ];
        const advise = [
            {rowheading: "Education Level:", data: highLevelEd},
            {rowheading: "Goal:", data: goal},
            {rowheading: "Result:", data: result},
            {rowheading: "Advisor:", data: advisor}
        ];


        return(
            <div className="container" id="studentResults">
                    <div className="panel-body">

                        <Table header="Student" tableData={student} /> 
                        <p />
                        <Table header="Schedule" tableData={schedules} />
                        <p />
                        <Table header="Advisement" tableData={advise}/>
                        <p />
                        {/* <Notes /> */}
                        
                        <div className="container" id="noteForm"> 
                            <h6> Add a note for this student:</h6>
                            <form onSubmit={(event) => this.handleNoteSubmit(event, this.props.student._id, this.state.note)}>
                                <fieldset>
                                    <div className="form-group">
                                        <input className="form-control" rows="10" name="note" value={this.state.note} onChange={this.handleInputChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </fieldset>
                            </form>
                        </div>  
                        <p />

                        <div className="container">
                        
                        {this.state.notes.length ? (
                                <div>
                                    {this.state.notes.map(rendernote => (
                                        <li key={rendernote}> {rendernote}</li>
                                    ))}
                                </div>
                            ) : (
                                <div></div>
                            )}

		                </div>
                        
                    </div>
            </div>
        );
    }       
}

export default StudentResults;