import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent';
import Header from './components/Header'
import SideBar from './components/SideBar';
import { Row, Container } from 'react-bootstrap';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from './components/TeachersListing';
import AddProduct from './components/AddProduct';
import TeachersListing from './components/TeachersListing';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
        <Row>
          <SideBar />
          <div className="col-md-8">
            <Switch>
              <Route path="/" exact component={MainContent} />
              <Route path="/login" component={Login} />
              <Route path="/teachers-listing" exact component={TeachersListing} />
              <Route path="/add-product" component={AddProduct} />
            </Switch>
          </div>
        </Row>
        </Container>
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


