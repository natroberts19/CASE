import React from 'react';

const TaskInput = (props) => {
	return (
    <div className="col">
			<form onSubmit={props.handleTaskSubmit}>
				<fieldset>
					<div className="form-group">
						<legend><i className="fa fa-plus"></i> Add a Task</legend>
							<hr />
								<label htmlFor="duedate">Due Date:</label>
								<input className="form-control" rows="1" name="dueDate" value={props.dueDate} onChange={props.handleInputChange} />
								<label htmlFor="title">Title:</label>
								<input className="form-control" rows="1" name="title" value={props.title} onChange={props.handleInputChange}  />
								<label htmlFor="description">Description:</label>
								<input className="form-control" rows="3" name="description" value={props.description} onChange={props.handleInputChange} />	
					</div>
								<button type="submit" className="btn btn-primary" id="existingStudent">Add Task</button>
				</fieldset>
			</form>
		</div>
  );
};

export default TaskInput;