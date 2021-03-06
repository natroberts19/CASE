import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import axios from 'axios';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import Sidenav from "./components/Sidenav";
// import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Student from "./components/Student";
import Reports from "./components/Reports"
import Tasks from "./components/Tasks"
import Advisor from "./components/Advisor"

class App extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    auth: {
      userId:"",
      username:"",
      isAuthenticated:false
    }
  };

  componentWillMount(){
    axios.get("/auth/isAuthenticated").then((result)=>{
      const {userId, isAuthenticated,username} = result.data
      this.setState({
        auth:{
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = (event) => {
    const {name, value} = event.target;    
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

  //call a Sign In function
    const newUser = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      name: "",
      username: "",
      password: ""
    }); 
    const {name} = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated){
        const {userId, isAuthenticated,username} = data.data;
        this.setState({
          auth:{
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result)=>{
      this.setState({
        auth:{
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>
        <Route exact path = "/" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/home" />
          } else{
            return <SignIn 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            />
          } 
        }}/>
        <Route exact path = "/signup" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/home" />
          } else{
            return <SignUp 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              name = {this.state.name}
              email = {this.state.email}
              password = {this.state.password}
            />
          }  
        }}/>

        <Route exact path="/home" render={()=>{
          if(this.state.auth.isAuthenticated){
            return <Dashboard handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } else {
            return <Redirect to="/" />
          }
        }} />

        <Route exact path="/api/students" render={()=>{
          if(this.state.auth.isAuthenticated){
            return <Student handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } else {
            return <Redirect to="/" />
          }
        }} />

        <Route exact path="/api/reports" render={()=>{
          if(this.state.auth.isAuthenticated){
            return <Reports handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } else {
            return <Redirect to="/" />
          }
        }} />

        <Route exact path="/api/tasks" render={()=>{
          if(this.state.auth.isAuthenticated){
            return <Tasks handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } else {
            return <Redirect to="/" />
          }
        }} />

        <Route exact path="/api/advisor" render={()=>{
          if(this.state.auth.isAuthenticated){
            return <Advisor handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } else {
            return <Redirect to="/" />
          }
        }} />

          {/* <Route exact path="/home/dashboard" component={Dashboard} /> */}
          {/* <Route exact path="/api/students" component={Student} /> */}
          {/* <Route exact path="/api/reports" component={Reports} /> */}
          {/* <Route exact path="/api/tasks" component={Tasks} /> */}
          {/* <Route exact path="/api/advisor" component={Advisor} /> */}
          
        
        
        </div>
      </Router>
    );
  }
}

export default App;