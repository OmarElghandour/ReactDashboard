import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent';
import Login from './components/Login'
import SideBar from './components/SideBar';
import { Row } from 'react-bootstrap';
import Haha from './components/haha';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Row>
        <SideBar />
        <Switch>
          <Route path="/" exact  component={MainContent} />
          <Route path="/login"  component={Haha} />
        </Switch>
        </Row>
      </div>
    </Router>
  );
}


const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)


export default App;


