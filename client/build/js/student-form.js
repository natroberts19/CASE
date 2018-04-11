// This file will include functionality to receive table data to display new student data.
$("#newStudent").on("click", function (event) {
  event.preventDefault();

  var newStudent = {
    studentId: $("#demoStudId").val().trim(),
    firstName: $("#demoFirstName").val().trim(),
    lastName: $("#demoLastName").val().trim(),
    phone: $("#demoPhone").val().trim(),
    email: $("#demoEmail").val().trim(),
    program: $("#schedProgram").val(),
    schedule: $("#schedTime").val(),
    program: $("#schedProgram").val(),
    campus: $("#schedCampus").val(),
    studentStatus: $("#schedStatus").val(),
    highLevelEd: $("#adviseLevel").val(),
    goal: $("#adviseGoal").val(),
    advisor: $("#adviseAdvisor").val(),
    contactType: $("#adviseContact").val(),
    notes: $("#adviseNote").val().trim(),
    files: $("#inputFile").val(),
    created: Date.now()
  };
  console.log("newStudent: ", newStudent);
  displayResults();

  $.post("/api/new", newStudent, function () {});
  //clear the form fields
  $('#demoStudId').val('');
  $('#demoFirstName').val('');
  $('#demoLastName').val('');
  $('#demoPhone').val('');
  $('#demoEmail').val('');
  $('#schedProgram').val('');
  $('#schedCampus').val('');
  $('#schedStatus').val('');
  $('#adviseLevel').val('');
  $('#adviseGoal').val('');
  $('#adviseAdvisor').val('');
  $('#adviseContact').val('');
  $('#adviseNote').val('');
  $('#adviseFile').val('');
});

// Take in the students (JSON) and creates a table body to show the new student that was submitted.
function displayResults(students) {
  // First, empty the table
  $("tbody").empty();

  // Then, for each entry of that json...
  students.forEach(function (data) {
    // Append each of the animal's properties to the table
    $("#new-student-table > thead").append(
      "<tr><td>" + data.studentId +
      "</td><td>" + data.firstName +
      "</td><td>" + data.lastName +
      "</td><td>" + data.phone +
      "</td><td>" + data.email +
      // "</td><td>" + newstudent.program +
      // "</td><td>" + newstudent.schedule +
      // "</td><td>" + newstudent.campus +
      // "</td><td>" + newstudent.studentStatus +
      // "</td><td>" + newstudent.goal +
      // "</td><td>" + newstudent.highLevelEd +
      // "</td><td>" + newstudent.advisor +
      // "</td><td>" + newstudent.notes +
      "</td><td>" + data.files
    );
  });
}