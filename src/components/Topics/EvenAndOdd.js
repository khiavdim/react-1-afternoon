import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    updateInput(value){
        this.setState({
            userInput: value
        })
    }

    splitArray(userInput){
        let arr = userInput.split(',')
        let even = []
        let odd = []
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] % 2 === 0) {
                even.push(arr[i])
            } else {
                odd.push(arr[i])
            }
        }
        this.setState({ 
            evenArray: even,
            oddArray: odd
        })
    }

    render(){
    return (
      <div className="puzzleBox evenAndOddPB">
          <h4>Evens and Odds</h4>
          <input className="inputLine" onChange={e => this.updateInput(e.target.value)}/>
          <button className="confirmationBox" onClick={() => this.splitArray(this.state.userInput)}>Split Evens and Odds</button>
          <span className="resultsBox">Evens: {`${this.state.evenArray} `}</span>
          <span className="resultsBox">Odds: {`${this.state.oddArray} `}</span>
      </div>
    )
  }
}