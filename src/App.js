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

const Wrapper = styled.div`
    form {
        margin-bottom: var(--space2);
    }
`

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    onSubmit = e => {
        this.setState({
            ...this.state,
            data: getData(e)
        })
    }

    render() {
        return (
            <Wrapper>
                <Header data-testid="header">
                    <h1>Show Calendar</h1>
                </Header>
                <Form onSubmit={this.onSubmit} />
                <Calendar data={this.state.data} />
            </Wrapper>
        )
    }
}

export default App