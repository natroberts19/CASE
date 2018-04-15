// -----------------------------------------------------------------------------------------------------------
// StudentResults is the component to hold the results Table from the StudentForm and SearchForm.
// This component imports into the Student page.
// -----------------------------------------------------------------------------------------------------------

import React, { Component } from 'react';
import "./style.css";
import Table from "../Table";
import axios from "axios";
import Notes from "../Notes"

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
    console.log("note form value:", note);
    console.log("note student value:", studentId);
    const newNote = {
        note
    }
    axios.post(`/api/notes/${studentId}`, newNote)
        .then((results)=>{ 
            console.log("post note results:", results);
            this.setState({
                notes: results.data.notes
            });
            
        }).catch((err)=>{
            console.log(err);
        });    

        this.setState({
            note: ""
        });

    axios.get(`/api/students/populateuser/${newNote}`)
        .then((results) => {
            console.log("get note results:", results);
            this.setState({
                note: note.notes,
            });

        }).catch((err) => {
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

        // const notes = [
        //     {rowheading: "Review and Add Notes:", data: note}
        // ];

        return(
            <div className="container" id="studentResults">
                    <div className="panel-body">

                        <Table header="Student" tableData={student} /> 
                        <p />
                        <Table header="Schedule" tableData={schedules} />
                        <p />
                        <Table header="Advisement" tableData={advise}/>
                        <p />
                        {/* <Table header="Notes" tableData={note} /> */}
                        
                        <div className="container" id="noteForm"> 
                            <h6> Add a note for this student:</h6>
                            <form onSubmit={(event) => this.handleNoteSubmit(event, this.props.student._id, this.state.note)}>
                                <fieldset>
                                    <div className="form-group">
                                        <input className="form-control" rows="3" name="note" value={this.state.note} onChange={this.handleInputChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </fieldset>
                            </form>
                        </div>  
                        <p />

                        <Notes notes={this.state.notes} />

                    </div>
            </div>
        );
    }       
}

export default StudentResults;