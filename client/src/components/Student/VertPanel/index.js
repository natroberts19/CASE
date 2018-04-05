import React from 'react';
import "./style.css";
import Table from "../VertPanel/Table"
import TableStudent from "../VertPanel/TableStudent"
import TableSchedule from "../VertPanel/TableSchedule"
import TableAdvise from "../VertPanel/TableAdvise"

const VertPanel = (props) => {
	return(
		<div className="container" id="studentResults">
            <legend><i class="fa fa-edit"></i> {props.legend}</legend>
                <div className="panel-body">

                    <TableStudent {...props} />
                    <TableSchedule {...props} />
                    <TableAdvise {...props} />
                    <Table header="Header" />
                    
                </div>
        </div>
	);
}

export default VertPanel;