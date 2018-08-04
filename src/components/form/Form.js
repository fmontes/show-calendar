import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const FormWrapper = styled.form`
    background-color: var(--gray-light);
    padding: var(--space);
    display: flex;
    justify-content: center;

    input {
        border: solid 1px var(--gray);
        padding: 4px var(--space);
    }

    input, button {
        margin: 0 var(--space);
    }
`

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            days: '',
            country: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.isValid()) {
            this.props.onSubmit(this.state)
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    isValid() {
        return this.state.date && this.state.days && this.state.country
    }

    render() {
        return (
            <FormWrapper data-testid="form" onSubmit={this.handleSubmit}>
                <h1 data-testid="h1">{this.props.test}</h1>
                <input type="date" name="date" data-testid="date" onChange={this.handleChange} />
                <input type="number" name="days" placeholder="Number of days" data-testid="days" onChange={this.handleChange} />
                <input type="text" name="country" placeholder="Country" data-testid="country" onChange={this.handleChange} />
                <button type="submit" data-testid="submit">Submit</button>
            </FormWrapper>
        )
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default Form
