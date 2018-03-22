// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in 'students' (JSON) and creates a table body
function displayResults(students) {
    // First, empty the table
    $("tbody").empty();
  
    // Then, for each entry of that json...
    students.forEach(function(student) {
      // Append each of the student's properties to the table
      $("tbody").append("<tr><td>" + student.studentId + "</td>" +
                           "<td>" + student.lastName + "</td>" +
                           "<td>" + student.firstName + "</td>" +
                           "<td>" + student.phone + "</td>" +
                           "<td>" + student.email + "</td>" +
                           "<td>" + student.studentStatus + "</td>" +
                           "<td>" + student.numContacts + "</td>" +
                           "<td>" + student.advisor + "</td></tr>");
    });
  }
  
  // Function to change "active" header
  function setActive(selector) {
    // remove and apply 'active' class to distinguish which column we sorted by
    $("th").removeClass("active");
    $(selector).addClass("active");
  }
  
  // 1: On Load
  // ==========
  // Ask the back end for json with all students
  $.getJSON("/all", function(data) {
    // Call our function to generate a table body
    displayResults(data);
    console.log("all data: ", data)
  });
  
  // 2: Button Interactions
  // ======================
  
  // When user clicks the My Active link, display active students for logged in advisor.
  $("#my-active").on("click", function() {
    // Set new column as currently-sorted (active)
    setActive("#my-active");
  
    // Do an api call to the back end for json with all students sorted by last name.
    $.getJSON("/advisor", function(data) {
      // Call our function to generate a table body
      displayResults(data);
      console.log("my student data: ", data)
    });
  });
  
  // When user clicks the Last Name sort button, display table sorted by last name.
  $("#last-sort").on("click", function() {
    // Set new column as currently-sorted (active)
    setActive("#last-sort");
  
    // Do an api call to the back end for json with all students sorted by last name.
    $.getJSON("/lastName", function(data) {
      // Call our function to generate a table body
      displayResults(data);
      console.log("last name data: ", data)
    });
  });
  
  // When user clicks the name sort button, display the table sorted by first name
  $("#first-sort").on("click", function() {
    // Set new column as currently-sorted (active)
    setActive("#first-sort");
  
    // Do an api call to the back end for json with all students sorted by first name
    $.getJSON("/firstName", function(data) {
      // Call our function to generate a table body
      displayResults(data);
      console.log("first name data: ", data)
    });
  });

  // When user clicks the less than 2 contacts button, display the students with less than 2 contacts.
  $("#less-two").on("click", function() {
     
    // Do an api call to the back end for json from students.
    $.getJSON("/contacts", function(data) {
      // Call our function to generate a table body
      displayResults(data);
      console.log("contact data: ", data)
    });
  });
  