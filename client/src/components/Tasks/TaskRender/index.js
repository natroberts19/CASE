//---------------------------------------------------------------------------------
//The TaskRender component displays all existing tasks for the advisor.
//---------------------------------------------------------------------------------

import React from 'react';

const TaskRender = (props) => {
	return(
		<div className="container">

		{this.state.tasks.length ? (
            <div>
                {this.state.tasks.map(task => {
                  return (
                    <li key={task._id}>
                        <strong>
                          {task.dueDate} : {task.title} : {task.description}
                        </strong>
                    </li>
                  );
                })}
            </div> 
            ) : (
              <h3>No Results to Display</h3>
			)}
			
		</div>
	);
}

export default TaskRender;