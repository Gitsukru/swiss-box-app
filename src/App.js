import React from 'react';
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import Abouts from './Components/Pages/Abouts';
import Account from './Components/Pages/Account';
import Contact from './Components/Pages/Contact';
import PriceList from './Components/Pages/PriceList';
import StorageSites from './Components/Pages/StorageSites';
import User from './Components/Pages/User';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import ForgotPassword from './Components/Pages/ForgotPassword';
import Footer from './Components/Footer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
          <Route exact path="/">
           <Home/>
          </Route>
          <Route path="/Account">
            <Account/>
          </Route>

          <Route path="/Storage-sites">
            <StorageSites/>
          </Route>

          <Route path="/Price-list">
            <PriceList/>
          </Route>
          <Route path="/Abouts">
            <Abouts/>
          </Route>

          <Route path="/Contact">
            <Contact/>
          </Route>

          <Route path="/Login">
            <Login/>
          </Route>  
          <Route path="/Register">
            <Register/>
          </Route>  
          <Route path="/Forgot-password">
            <ForgotPassword/>
          </Route>  
          <Route path="/User">
            <User/>
          </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
