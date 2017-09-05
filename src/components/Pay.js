import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import store from "../store"
import visa from '../img/visa.png'
import mastercard from '../img/mastercard.png'
import paypal from '../img/paypal.png'
const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


class Pay extends Component {
  constructor(props) {
    super(props);
      this.handleOptionChange=this.handleOptionChange.bind(this);
      this.enviarPago = this.enviarPago.bind(this);
      this.state={
        selectedOption :"",
      }
  }
  handleOptionChange = (event)=>{
    console.log(event.currentTarget.value)
    this.setState({selectedOption:event.currentTarget.value})
  }
  enviarPago = () => {

    if(this.state.selectedOption===""){
      alert("debe seleccionar un metodo de pago")
    }else{
    alert("compra realizada con exito")
    }
  }
  render() {
    return (
    <div className="sectionPayment">
    PAYMENT
    <div className="radioPayment">
    <form>
  <div className="radio">
    <label>
      <input className="txradio"
      type="radio"
      name="tipodepago"
      value="visa"

       onChange={this.handleOptionChange}
      />
      <img className="imgCard" src={visa}/>
    </label>
  </div>
  <div className="radio">
    <label>
      <input className="txradio"
       type="radio"
        name="tipodepago"
         value="masterCard"

           onChange={this.handleOptionChange}
           />
      <img className="imgCard" src={mastercard}/>
    </label>
  </div>
  <div className="radio">
    <label>
      <input className="txradio"
       type="radio"
        name="tipodepago"
         value="paypal"

           onChange={this.handleOptionChange}
           />
      <img className="imgCard" src={paypal}/>
    </label>
  </div>

</form>
<button onClick={this.enviarPago} className="btnNext btn">NEXT</button>
    </div>
    </div>
    )
  }


}

export default Pay;
