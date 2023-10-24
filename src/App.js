import React, { Component } from "react";

export default class App extends Component {
  state = {
    number: 0,
  };

  numberAdd = (e) => {
    this.setState ({
      number: this.state.number + 1,
    })
    
  }

  numberMinus = (e) => {
    this.setState ({
      number: this.state.number - 1,
    })
    
  }
  
  render () {
    return (
      <>
      <h1>Лічильник</h1>
      <p>Поточне значення:{this.state.number}</p>
      <button onClick={this.numberAdd}>Додати число</button>
      <button onClick={this.numberMinus}>Відняти число</button>
      </>
    )
  }
}