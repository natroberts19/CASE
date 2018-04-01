// ------------------------------------------------------------------------------------------------------------------
// Reports is a page that contains the Tabs which contain each student report (MyActive, MyInactive, MyAll, and All.)
// This page will render when a user clicks the Reports button on the sidenav.
// ------------------------------------------------------------------------------------------------------------------

import React, { Component } from "react";
import ReportTabs from "./ReportTabs";
import MyActiveReport from "./MyActiveReport";
import MyInactiveReport from "./MyInactiveReport";
import MyAllReport from "./MyAllReport";
import AllReport from "./AllReport";

class Reports extends Component {
  state = {
    currentPage: "MyActiveReport"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
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
      <div className="container">
      <h2><i className="fa fa-line-chart"></i> Reports</h2><p />

        <ReportTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}

      </div>
    );
  }
}

export default Reports;