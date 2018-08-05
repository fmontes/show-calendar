import React, { Component } from 'react'
import styled from 'styled-components'

import Calendar from './components/calendar/Calendar'
import Form from './components/form/Form'
import getData from './lib/MyLib';

const Header = styled.header`
    background-color: #222;
    padding: 20px;
    color: white;

    h1 {
        font-size: 1.5rem;
    }
`

const Warning = styled.div`
    background-color: orange;
    color: #FFF;
    margin-bottom: var(--space2);
    padding: var(--space);
    text-align: center;
`

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    onSubmit = e => {
        getData(e).then(data => {
            this.setState({
                ...this.state,
                data: data
            })
        })
    }

    render() {
        return (
            <div>
                <Header data-testid="header">
                    <h1>Show Calendar</h1>
                </Header>
                <Form onSubmit={this.onSubmit} />
                <Warning>Due free API limitations, holidays only works on past months</Warning>
                <Calendar data={this.state.data} />
            </div>
        )
    }
}

export default App