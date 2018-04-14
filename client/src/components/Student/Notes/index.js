//---------------------------------------------------------------------------------
//The Notes component gets and displays all existing notes for a selected student.
//---------------------------------------------------------------------------------

import React from 'react';
import "./style.css";

const Notes = ({notes}) => {

	return(
		<div className="container">
			{notes.length ? (
				<div>
					{notes.map(note => (
						<li key={note._id}> {note.notes}</li>
					))}
				</div>
			) : (
				<div>No notes exist yet! Add your first note using the form above.</div>
			)}
		</div>
	
		)
	}		

export default Notes;