import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListRecruiterComponent from './components/ListRecruiterComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateRecruiterComponent from './components/CreateRecruiterComponent';
import UpdateRecruiterComponent from './components/UpdateRecruiterComponent';
import ViewRecruiterComponent from './components/ViewRecruiterComponent';
import LoginForm from './Components1/LoginForm';
import Home from './components/Home';
import Notification from './components/Notification';


function App() {
  return (
    <div>
   
  
  <Router>
              <HeaderComponent />
             
             

          <div className="container">
                    <Switch> 
                    <Route path = "/" exact component = {Home}></Route>
                         <Route path = "/ListRecruiterComponent" exact component = {ListRecruiterComponent}></Route>
                          <Route path = "/recruiters" component = {ListRecruiterComponent}></Route>
                          <Route path = "/add-recruiter/:id" component = {CreateRecruiterComponent}></Route>
                          <Route path = "/view-recruiter/:id" component = {ViewRecruiterComponent}></Route>
                          <Route path = "/notification" component = {Notification}></Route>
                          
                        {/*}  <Route path = "/HeaderComponent" exact component = {HeaderComponent}></Route>*/}
                    </Switch>
                </div>
               
               
  <FooterComponent />
   </Router>
    </div>
    
  );
}

export default App;
