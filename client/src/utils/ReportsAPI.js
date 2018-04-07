// ------------------------------------------
// All the GET queries for the Reports page.
// ------------------------------------------

import axios from "axios";

export default {
    
    // GET all active students by advisor.
    getMyActiveReport: function(status, advisor) {
        return axios.get("/api/reports/findmyactive", )
    },
    
    // GET all inactive students by advisor.
    getMyInactiveReport: function(status, advisor) {
        return axios.get("/api/reports/findmyinactive", )
    },

    // GET all students by advisor.
    getMyAllReport: function(status, advisor) {
        return axios.get("/api/reports/findmyall", )
    },

    // GET all students loaded in the CASE database.
    getAllReport: function() {
        return axios.get("/api/reports/findall")
    }
    
};