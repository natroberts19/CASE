//---------------------------------------------------------------------------------
//The TaskRender component displays all existing tasks for the advisor.
//---------------------------------------------------------------------------------

import React from 'react';

const TaskRender = ({tasks}) => {
	return(
		<div className="col">
			<div className="container" id="taskResults"> 
				<legend><i className="fa fa-calendar-check-o"></i> Your Open Tasks</legend>
				<hr />
					<div>
						{tasks.map(task => (
								<tbody>
									<tr key={task._id}>
										<td>{task.dueDate}</td>
										<td>{task.title}</td>
										<td>{task.description}</td>
									</tr>
								</tbody>
							
						))}
						</div> 
					</div>
				</div>
						
		
	)
}

export default TaskRender;