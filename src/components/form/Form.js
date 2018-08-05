import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FormWrapper = styled.div`
    background-color: var(--gray-light);
    padding: var(--space);

    form {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
        max-width: 44rem;
        margin: 0 auto;
    }

    input {
        border: solid 1px var(--gray);
        padding: 4px var(--space);
    }

    button {
        border: solid 1px midnightblue;
        background-color: deepskyblue;
        color: midnightblue;
    }
`

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            days: '',
            country: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        if (this.isValid()) {
            this.props.onSubmit(this.state)
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }

    isValid() {
        return this.state.date && this.state.days && this.state.country
    }

    render() {
        return (
            <FormWrapper>
                <form data-testid="form" onSubmit={this.handleSubmit}>
                    <input
                        type="date"
                        name="date"
                        data-testid="date"
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="days"
                        placeholder="Number of days"
                        min="1"
                        data-testid="days"
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        data-testid="country"
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit" data-testid="submit">
                        Submit
                    </button>
                </form>
            </FormWrapper>
        )
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Form
