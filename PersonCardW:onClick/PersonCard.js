import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: this.props.age
        };
    }
    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    };
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        const Button = props => {
            return (
                <button onClick={props.handleClick}>
                    Birthday Button for {this.props.firstName} {this.props.lastName}
                </button>
            );
        };
        return (
            <div>
                <h1>
                    {lastName}, {firstName}
                </h1>
                <p>Age: {this.state.clickCount}</p>
                <p>Hair Color: {hairColor}</p>
                <Button handleClick={this.handleClick}></Button>
            </div>
        );
    }
}

export default PersonCard;