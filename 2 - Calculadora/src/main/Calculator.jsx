// We will also import the component, because will need use the state
import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Calculator extends Component {

  state = { ...initialState }

  constructor(props) {
    super(props);

    // making the bind for the functions to recognize the 'this' of the component
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);

  }

  // Defining the initial state whenever the AC button is clicked, 
  // defining the state of that component as a copy of the initialState variable
  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation == '=';
      const currentOperation = this.state.operation;

      const values = { ...this.state.values };

      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch (error) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;


      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      });

    }
  }

  // Logic and trataments to the entry of numbers in the calculator
  addDigit(n) {

    // Checking if the digit clicked is equal to ''. '' in order
    // to avoid it if there is already one on the display
    if (n === "." && this.state.displayValue.includes('.')) {
      return
    }

    // Checking if the display is clear
    const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay;

    // Checking if the clearDisplay variable is true or false and setting 
    // the currentValue value to empty or to the display value
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== '.') {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = { ...this.state.values };
      values[i] = newValue;
      console.log(values);
      this.setState({ values: values });
    }
  }


  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" triple click={this.clearMemory} />
        <Button label="/" operation={true} click={this.setOperation} />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDigit} double />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation />

      </div>
    )
  }
}