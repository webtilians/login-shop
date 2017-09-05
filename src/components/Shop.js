import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Pay from './Pay'
import '../App.css';

class Shop extends Component {
  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a>EXIT</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid>
          <Row>
            <Col sm={8}>
              <ProductList />
            </Col>
            <Col sm={4}>
              <ShoppingCart />
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Pay cambiarView={this.cambiarView}/>
        </Grid>
      </div>
    );
  }
}

export default Shop;
