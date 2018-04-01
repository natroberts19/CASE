import React from 'react';
import "./style.css";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import Footer from '../Footer';

// Student and Reports eventually will be its own page and will not import here!
// import Home from "../Home";
// import Student from "../Student";
// import Reports from "../Reports";

// This wrapper will be the page swap area for Home, Student, Reports, Tasks, Advisor pages.
const Wrapper = (props) =>{
	return (
		<div className="container">
			<Navbar />
            <Sidenav />
            
            <Footer />
        </div>
    );
}

export default Wrapper;