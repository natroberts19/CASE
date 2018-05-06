import React from 'react';
import "./style.css";

const Form = (props) => {
	return(
		<div className="form-group">
			<h6>Schedule</h6>
			<label HTMLfor="schedule">Program:</label>
			<select className="form-control" name="program" value={props.program} onChange={props.handleInputChange}>
				<option value="None">None</option>
				<option value="ABE">ABE</option>
				<option value="GED">GED</option>
				<option value="ESOL">ESOL</option>
			</select>

			<div className="form-check">
				<label> Status: </label>
				<select className="form-check-label">
				<input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
				Option one is this and that—be sure to include why it's great
				</select>
			</div>
			<div className="form-check">
			<label className="form-check-label">
				<input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
				Option two can be something else and selecting it will deselect option one
			</label>
			</div>

                      
		</div>
	);
}

export default Form;