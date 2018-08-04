import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <form>
                <input type="date" name="date" />
                <input type="number" name="days" />
                <input type="country" name="country" />
            </form>
        )
    }
}

export default Form
