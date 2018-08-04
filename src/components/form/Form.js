import React, { Component } from 'react'
import styled from 'styled-components'

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
    render() {
        return (
            <FormWrapper data-testid="form">
                <input type="date" name="date" data-testid="date" />
                <input type="number" name="days" placeholder="Number of days" data-testid="days" />
                <input type="text" name="country" placeholder="Country" data-testid="country" />
                <button type="submit" data-testid="submit">Submit</button>
            </FormWrapper>
        )
    }
}

export default Form
