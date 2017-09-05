import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Form, Col, Button, Checkbox } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import store from '../store'
import '../App.css';
const REGEXP_EMAIL = /^[^.@\- ][\w\d!#$%&'*+-\/=?^`{|}~.]{2,255}@([a-zA-Z\d-]{3,255}\.[a-zA-Z]{2,5}|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/;



class Login extends Component {
  constructor(props) {
    super(props);
     this.handleChangeMail = this.handleChangeMail.bind(this);
     this.handleChangePass = this.handleChangePass.bind(this);
     this.loguearse = this.loguearse.bind(this);
    this.state = {
      btnDisabled:true,
      email:"",
      pass:"",
      msgEmailErr:""
    }

  }

  loguearse() {
    console.log(this.state.email)
    if(this.props.userDat.email===this.state.email && this.props.userDat.pass===this.state.pass){
      console.log("cambiarView")
      this.props.cambiarView("shop")
    }
  }

  handleChangeMail=(event)=> {
    let flag=true
    let msg=this.state.msgEmailErr
    let ok =REGEXP_EMAIL.test(event.target.value)
    console.log(ok)
    if(ok){
      flag=false;
      msg=""
    }else msg="escriba un mail correcto"
   this.setState({email: event.target.value,btnDisabled:flag,msgEmailErr:msg});
 }
 handleChangePass=(event) =>{
  this.setState({pass: event.target.value});
}

  render() {
    return (
      <div className="wrapLogin">
      <div className="headLogin">
          <a className="txtlogin">LOGIN</a>
      </div>
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">

          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
          <input
          placeholder="xxx@xxx.com"
          value={this.state.email}
          onChange={this.handleChangeMail}
          />{this.state.msgEmailErr}
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Pass
          </Col>
          <Col sm={10}>
            <input type="password" placeholder="xxxx"
            onChange={this.handleChangePass}/>
          </Col>
        </FormGroup>



        <FormGroup>
          <Col smOffset={3} sm={10}>
            <Link to='/shop'><Button className="btnlogin" disabled={this.state.btnDisabled}  onClick={()=>this.loguearse()}>
              Login
            </Button>
            </Link>
          </Col>
        </FormGroup>
      </Form>
      </div>
    );
  }
}

export default Login;
