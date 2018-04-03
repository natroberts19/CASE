// ------------------------------------------
// All the GET queries for the Reports page.
// ------------------------------------------

import axios from "axios";

export default {
    
    // GET all active students by advisor.
    // getMyActive: function(status, advisor) {
    //     return axios.get("/api/reports/", )
    // },
    
    // GET all students loaded in the CASE database.
    getAllReport: function() {
        return axios.get("/api/reports/")
    }


    // ** These are for the Student Search utility:
        // Get student by firstName
        // getStudentByFirst: function(firstName) {
        //     return axios.get("/api/students/", firstName);
        // },
        // Get student by lastName
        // getStudentByLast: function(lastName) {
        //     return axios.get("/api/students/", lastName);
        // },
        // Get student by 7-digit Id
        // getStudentById: function(studentId) {
        //     return axios.get("/api/students/", studentId);
        // }
    
};