import React, { Component } from "react";
import './NumberField.css'
class NumberField extends Component {

    state = {
        value: 0
    }

    constructor(props) {
        super(props)
    }

    handleInput = (value) => {
        if (value !== undefined) {
            if (value < 0) {
                return;
            }
            this.setState({ value: value }, () => this.props.onChange(this.state.value))
        }
        
    }


    decrease = () => {
        if (this.state.value === 0)
            return;
        this.setState({ value: this.state.value - 1 },() => this.props.onChange(this.state.value));
    }

    increase = () => {
        this.setState({ value: this.state.value + 1 },() => this.props.onChange(this.state.value));
    }

    render() {
        return (
            <div className="def-number-input number-input">
                <button onClick={this.decrease} className="minus"></button>
                <input className="quantity" name="quantity" value={this.state.value} onChange={event => this.handleInput(event.target.value)}
                    type="number" />
                <button onClick={this.increase} className="plus"></button>
            </div>
        );
    }
}

export default NumberField;