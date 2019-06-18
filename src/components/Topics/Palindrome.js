import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        };
    }

    updateInput(value) {
        this.setState({
            userInput: value
        });
    }

    checkPalindrome(userInput) {
        let fwd = userInput;
        let bkwd = userInput.split('').reverse().join('');

        if (fwd === bkwd) {
            this.setState({
                palindrome: 'true'
            });
        } else {
            this.setState({
                palindrome: 'false'
            });
        }
    }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={ e => this.updateInput(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.checkPalindrome(this.state.userInput)}>Filter</button>
        <span className="resultsBox">Palindrome: { JSON.stringify(this.state.palindrome, null, 10)} </span>
      </div>
    )
  }
}