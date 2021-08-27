import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age,
        }
    }
    render (){
        const { firstName, lastName, hairColor } = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h4>Age: {this.state.age}</h4>
                <h4>Hair Color: {hairColor}</h4>
                <button onClick={() => this.setState({age:this.state.age + 1})}>Birthday button for {firstName} {lastName}</button>
            </div>
        )
    }
}
export default PersonCard;