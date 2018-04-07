// ------------------------------------------------
// All the GET queries for the Student statistics.
// ------------------------------------------------

import axios from "axios";

export default {
    
    // GET the count for all ABE students.
    getCountABE: function(status, program) {
        return axios.get("/api/reports/countabe", )
    },

    // GET the count for all GED students.
    getCountGED: function(status, program) {
        return axios.get("/api/reports/countged", )
    },
    
    // GET the count for all ESOL students.
    getCountESOL: function(status, program) {
        return axios.get("/api/reports/countesol", )
    }   
};