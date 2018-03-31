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
      <div>
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