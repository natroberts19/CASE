//---------------------------------------------------
// This is the Notes API to get all notes by student.
//---------------------------------------------------

import axios from "axios";

export default {
    
    // GET all notes for a student.
    getNotesByStudent: function() {
        return axios.get("api/students/notes/all", )
    }
    
};
