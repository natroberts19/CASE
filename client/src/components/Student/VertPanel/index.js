import React from 'react';
import "./style.css";
import TableStudent from "../VertPanel/TableStudent"
import TableSchedule from "../VertPanel/TableSchedule"
import TableAdvise from "../VertPanel/TableAdvise"

const VertPanel = (props) => {
	return(
		<div className="container" id="studentResults">
            <legend>{props.legend}</legend>
                <div className="panel-body">

                    <TableStudent {...props} />
                    <TableSchedule {...props} />
                    <TableAdvise {...props} />
                    
                </div>
        </div>
	);
}

export default VertPanel;