# Career Advisor Solution for Educators (CASE)

## Background

### Description
The Career Advisor Solution for Educators (CASE) application is a full-stack, case management web application that allows career advisors to create, update, and view student information and progress. The application is designed to be used by adult educators and career advisors. The application is scalable to be used in education and various social service organizations.

### Needs Addressed
Adult Learning Center Osceola (ALCO) serves adult students who are seeking assistance with learning English or finishing their high school diploma. While they are studying at ALCO, the Career Services department assists students with career planning and skills training. Currently, there are three advisors in Career Services that have individual caseloads of students that they assist with their career and education needs.

**Problems:**

1.	*Tracking and Updates.* Student registration and schedule data is tracked on a school-district system called FOCUS which is designed as a K-12 system. In FOCUS, there is no way to track career-related services or progress for adults. Right now, advisors track student information using a combination of an Excel spreadsheet and physical folders.

2.	*Reporting.* Part of an advisor's annual evaluation is based on a criterion known as Measurable Student Growth Outcome (MSGO). A successful MSGO is based on whether adult students that we advise advance in their education or career goals. A target percentage is established at the beginning of the evaluation period. Progress toward reaching this goal is tracked manually by each advisor.

**Solutions:**

The CASE application aims to solve these problems by providing a user-friendly platform for advisors to add, update, and view key student data. The CASE application provides five page views for advisors all easily accessible from a side navigation menu.

***Pages***

* Dashboard - Landing page upon log-in. Provides a quick view of key data points and will hold a messaging "alert" section in the Jumbotron area.
* Student - Page that allows the advisor to search for a student or add new students into the database.
* Reports - Provides the user with key report views of student data.
* Tasks - Advisors will be able to add "to-do" items related to student advisement sessions.
* Advisor - This page provides a summary of the advisor's MSGO status and information about how the figure is calculated.

## Technologies

* React UI with Bootstrap 4 elements to create dynamic page views.
* Authentication with Passport.
* Node and Express web server.
* MongoDB to store persistent report data.
* Mongoose to query, post and update data.

## Version 1.0 Release, April 17, 2018

* Posting of new student data.
* Posting of notes to sudents.
* Advisor report views of students.
* Dashboard real-time, snapshot statistics.
* Advisor real-time calculation of MSGO status.

## Future Releases

* Three-tiered access (support staff, advisor, and admin).
* AWS S3 for file uploading and storage.
* Mongoose CSV Export npm to export report tables to .csv format.
* Front end edit capability to update student status and result.
* To-do tasks linked to specific students.
* Advisor alert messaging on the Dashboard.
* Enhanced advisor reporting.
* Messaging to students.

## Application Link
[https://safe-sands-81459.herokuapp.com/]