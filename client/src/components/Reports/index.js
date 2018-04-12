// ---------------------------------------------------------------------------------------------------------
// Reports is a page that contains the Tabs for each student report (MyActive, MyInactive, MyAll, and All).
// This page will render when a user clicks the Reports button on the Sidenav.
// ---------------------------------------------------------------------------------------------------------

import React, { Component } from "react";
import ReportsAPI from "../../utils/ReportsAPI";
import ReportTabs from "./ReportTabs";
import MyActiveReport from "./MyActiveReport";
import MyInactiveReport from "./MyInactiveReport";
import MyAllReport from "./MyAllReport";
import AllReport from "./AllReport";
import Sidenav from "../Sidenav";
import Navbar from "../Navbar";
import Footer from '../Footer';

class Reports extends Component {
  state = {
    currentPage: "MyActiveReport"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  // GET to load all CASE students.
  loadAll = () => {
    ReportsAPI.getAllReport()
      .then(res => this.setState({ students: res.data }))
      .catch(err => console.log(err));
  };

  renderPage = () => {
    if (this.state.currentPage === "MyActiveReport") {
      return <MyActiveReport />;
    } else if (this.state.currentPage === "MyInactiveReport") {
      return <MyInactiveReport />;
    } else if (this.state.currentPage === "MyAllReport") {
      return <MyAllReport />;
    } else {
      return <AllReport />;
    }
  };

  render() {
    return (
      <div className="container" style={{"marginLeft":"175px"}}>
          <Navbar 
            username={this.props.auth.username} 
            handleLogout={this.props.handleLogout}
          />
        
          <h2><i className="fa fa-line-chart"></i> Reports</h2><p />
          <div className="container">
          
            <ReportTabs
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
            <p />
            {this.renderPage()}

          </div>
          <Sidenav />
          <Footer />
      </div>
    );
  }
}

export default Reports;