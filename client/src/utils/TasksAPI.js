//---------------------------------------------------
// This is the Tasks API to get all tasks by advisor.
//---------------------------------------------------

import axios from "axios";

export default {
    
    // GET all tasks loaded in the database.
    getAllTasks: function() {
        return axios.get("api/todo/all", )
    },
    
    // POSTS a task to the database.
//     postTask: function(taskData) {
//         return axios.post("/api/todo", taskData);
//   }
    
};