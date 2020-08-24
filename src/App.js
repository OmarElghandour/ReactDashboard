import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent';
import Header from './components/Header'
import SideBar from './components/SideBar';
import { Row } from 'react-bootstrap';
import Haha from './components/haha';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Row>
          <SideBar />
          <div className="no-padding col-md-9">
            <Header />
            <Switch>
              <Route path="/" exact component={MainContent} />
              <Route path="/login" component={Haha} />
            </Switch>
          </div>
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


