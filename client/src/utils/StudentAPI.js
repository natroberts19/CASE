import axios from "axios";

export default {
    
    // Save a new student to the database:
        saveStudent: function(studentData) {
            return axios.post("/api/students", studentData);
        },

    // These are for the Student Search utility:
        // Get student by firstName
        getStudentByFirst: function(firstName) {
            return axios.get("/api/students/", firstName);
        },
        // Get student by lastName
        getStudentByLast: function(lastName) {
            return axios.get("/api/students/", lastName);
        },
        // Get student by 7-digit Id
        getStudentById: function(studentId) {
            return axios.get("/api/students/", studentId);
        }
    
};