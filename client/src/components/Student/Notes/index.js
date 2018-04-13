//---------------------------------------------------------------------------------
//The Notes component gets and displays all existing notes for a selected student.
//---------------------------------------------------------------------------------

import React from 'react';
import "./style.css";

const Notes = ({notes}) => {

	return(
		<div className="card" id="note-card">
			{notes.length ? (
				<div id="change-font">
					{notes.map(note => (
						<li key={note._id}> {note.notes}</li>
					))}
				</div>
			) : (
				<div>No notes exist yet! Add your first note below.</div>
			)}
		</div>
	
		)
	}		

export default Notes;