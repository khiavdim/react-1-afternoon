import React, { Component } from 'react';

export default class Sum extends Component {
    constructor() {
        super();
        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        };
    }

    updateNum1(value) {
        this.setState({
            num1: parseInt(value, 10)
        });
    }

    updateNum2(value) {
        this.setState({
            num2: parseInt(value, 10)
        });
    }

    addNums(num1, num2){
        this.setState({
            sum: num1+num2
        })
    }


  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={ e => this.updateNum1(e.target.value)}></input>
        <input className="inputLine" onChange={ e => this.updateNum2(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.addNums(this.state.num1, this.state.num2)}>Add</button>
        <span className="resultsBox">Sum: {this.state.sum} </span>
      </div>
    )
  }
}