import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Shop from './components/Shop.js'
import Login from './components/Login.js'
import FinPago from './components/FinPago'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.cambiarView = this.cambiarView.bind();
    this.state={
      view:'shop'
    }
  }
cambiarView = (view) => {
  this.setState({view})
}

  render() {

      switch (this.state.view) {
          case 'login':
          return <Login userDat={this.props.userDat} cambiarView={this.cambiarView}/>;
          case 'shop':
          return <Shop cambiarView={this.cambiarView}/>;
          case 'finDePago':
          return <FinPago/>;


      }

  }
}

export default App;
