// ------------------------------------------
// All the GET queries for the Advisors page.
// ------------------------------------------

import axios from "axios";

export default {
    
    // GET all students by advisor.
    getCountMyAll: function() {
        return axios.get("/api/advisors/countmyall", )
    },
    
    // GET all active students by advisor.
    getCountMyActive: function(status, advisor) {
        return axios.get("/api/advisors/countmyactive", )
    },

    // GET all inactive students by advisor.
    getCountMyInactive: function(status, advisor) {
        return axios.get("/api/advisors/countmyinactive", )
    },

    // GET all students by advisor.
    getCountKarenActive: function(status, advisor) {
        return axios.get("/api/advisors/countkarenactive", )
    },
    
    // GET all students by advisor.
    getCountDianaActive: function(status, advisor) {
        return axios.get("/api/advisors/countdianaactive", )
    },

    // GET all students with a result by advisor.
    getCountMSGOResult: function() {
        return axios.get("/api/advisors/countmsgoresult", )
    }
};