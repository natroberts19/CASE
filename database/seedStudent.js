// This file empties the Student collection and inserts the students created below:
const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/case-development",
  {
    // useMongoClient: true
  }
);

const studentSeed = [
    {
    studentId: "3215698",
    firstName: "Horatio",
    lastName: "Sullivan",
    phone: "407-555-1212",
    email: "hor123@gmail.com",
    program: "GED",
    schedule: "AM-2",
    campus: "CHS",
    studentStatus: "Inactive",
    numContacts: 1,
    highLevelEd: "less than than HS",
    goal: "GED",
    result: "GED",
    advisor: "Natalie",
    date: new Date(Date.now())
  },
  {
    studentId: "6785698",
    firstName: "Monica",
    lastName: "Garcia",
    phone: "407-555-1212",
    email: "mon123@gmail.com",
    program: "ESOL",
    schedule: "PM-2",
    campus: "Main",
    studentStatus: "Inactive",
    numContacts: 1,
    highLevelEd: "HS Grad",
    goal: "Improve English",
    result: "GED",
    advisor: "Diana",
    date: new Date(Date.now())
  },
  {
    studentId: "4568698",
    firstName: "Tomas",
    lastName: "Martinez",
    phone: "407-555-1212",
    email: "tom123@gmail.com",
    program: "ESOL",
    schedule: "PM-2",
    campus: "Poinciana",
    studentStatus: "Inactive",
    numContacts: 1,
    highLevelEd: "less than than HS",
    goal: "Employment",
    result: "Employment",
    advisor: "Karen",
    date: new Date(Date.now())
  },
  {
    studentId: "1235234",
    firstName: "Pangor",
    lastName: "Gupta",
    phone: "407-555-1212",
    email: "pan123@gmail.com",
    program: "ESOL",
    schedule: "AM-1",
    campus: "Main",
    studentStatus: "Inactive",
    numContacts: 1,
    highLevelEd: "2-yr",
    goal: "Improve English",
    result: "Employment",
    advisor: "Natalie",
    date: new Date(Date.now())
  },
  {
    studentId: "5465698",
    firstName: "Nilda",
    lastName: "Trello",
    phone: "407-555-1212",
    email: "nil123@gmail.com",
    program: "ESOL",
    schedule: "AM-1",
    campus: "Main",
    studentStatus: "Inactive",
    numContacts: 1,
    highLevelEd: "4-yr",
    goal: "Improve English",
    result: "Employment",
    advisor: "Diana",
    date: new Date(Date.now())
  },
  {
    studentId: "5468698",
    firstName: "Jorima",
    lastName: "Rodriguez",
    phone: "407-555-1212",
    email: "jor123@gmail.com",
    program: "ESOL",
    schedule: "PM-2",
    campus: "KMS",
    studentStatus: "Inactive",
    numContacts: 1,
    highLevelEd: "4-yr",
    goal: "Promotion",
    result: "Promotion",
    advisor: "Karen",
    date: new Date(Date.now())
  },
  {
    studentId: "5485698",
    firstName: "Helga",
    lastName: "Sanchez",
    phone: "407-555-1212",
    email: "hor123@gmail.com",
    program: "GED",
    schedule: "AM-2",
    campus: "CHS",
    studentStatus: "Active",
    numContacts: 1,
    highLevelEd: "less than than HS",
    goal: "GED",
    advisor: "Natalie",
    date: new Date(Date.now())
  },
  {
    studentId: "6785632",
    firstName: "Monica",
    lastName: "Garcia",
    phone: "407-555-1212",
    email: "mon123@gmail.com",
    program: "ESOL",
    schedule: "PM-2",
    campus: "Main",
    studentStatus: "Active",
    numContacts: 1,
    highLevelEd: "HS Grad",
    goal: "Improve English",
    advisor: "Diana",
    date: new Date(Date.now())
  },
  {
    studentId: "4578698",
    firstName: "Tilda",
    lastName: "Moss",
    phone: "407-555-1212",
    email: "til123@gmail.com",
    program: "GED",
    schedule: "PM-2",
    campus: "Poinciana",
    studentStatus: "Active",
    numContacts: 1,
    highLevelEd: "less than than HS",
    goal: "Employment",
    advisor: "Karen",
    date: new Date(Date.now())
  },
  {
    studentId: "1235234",
    firstName: "Penny",
    lastName: "Garcia",
    phone: "407-555-1212",
    email: "pen123@gmail.com",
    program: "ABE",
    schedule: "AM-1",
    campus: "Main",
    studentStatus: "Active",
    numContacts: 1,
    highLevelEd: "less than than HS",
    goal: "GED",
    advisor: "Natalie",
    date: new Date(Date.now())
  },
  {
    studentId: "5432698",
    firstName: "Nick",
    lastName: "Tusk",
    phone: "407-555-1212",
    email: "nic123@gmail.com",
    program: "ABE",
    schedule: "AM-1",
    campus: "Main",
    studentStatus: "Active",
    numContacts: 1,
    highLevelEd: "less than than HS",
    goal: "GED",
    advisor: "Diana",
    date: new Date(Date.now())
  },
  {
    studentId: "9878698",
    firstName: "Omaira",
    lastName: "Rodriguez",
    phone: "407-555-1212",
    email: "oma123@gmail.com",
    program: "ESOL",
    schedule: "PM-2",
    campus: "KMS",
    studentStatus: "Active",
    numContacts: 1,
    highLevelEd: "4-yr",
    goal: "Promotion",
    advisor: "Karen",
    date: new Date(Date.now())
  }
];

// Drop the existing records from the collection and add the new ones.
db.Student
  .remove({})
  .then(() => db.Student.collection.insertMany(studentSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });