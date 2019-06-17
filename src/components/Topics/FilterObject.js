import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            people: [
                {
                    name: 'Kelly',
                    age: 32,
                    gender: 'Female',
                    hairColor: 'Black'
                },
                {
                    name: 'Claire',
                    gender: 'Female',
                    favColor: 'Red'
                },
                {
                    name: 'George',
                    hairColor: 'Brown',
                    age: 31
                },
                {
                    name: 'Jamie',
                    age: 22,
                    hairColor: 'Red'
                }
            ],
            userInput: '',
            filteredPpl: []
        }
    }

    updateInput(value) {
        this.setState({ 
            userInput: value
        });
    }

    filterPpl(value) {
        let people = this.state.people;
        let filteredPpl = [];
    
        for ( let i = 0; i < people.length; i++ ) {
          if ( people[i].hasOwnProperty(value) ) {
            filteredPpl.push(people[i]);
          }
        }
    
        this.setState({
            filteredPpl: filteredPpl 
        });
      }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.people, null, 10) }</span>
                <input className="inputLine" onChange = {e => this.updateInput(e.target.value)}/>
                <button className="confirmationBox" onClick = {() => this.filterPpl(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredPpl, null, 10) }</span>
            </div>
        )
    }
}