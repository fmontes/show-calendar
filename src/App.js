import React, { Component } from 'react'
import styled from 'styled-components'

import Month from './components/calendar/Month'
import Form from './components/form/Form'

const mock = [
    {
        name: 'Jan 2018',
        weeks: [
            [
                {
                    day: 5,
                    holiday: true,
                    number: 22,
                    weekend: false,
                },
                {
                    day: 6,
                    holiday: false,
                    number: 23,
                    weekend: false,
                },
            ],
            [
                {
                    day: 0,
                    holiday: false,
                    number: 24,
                    weekend: false,
                },
                {
                    day: 1,
                    holiday: false,
                    number: 25,
                    weekend: false,
                },
                {
                    day: 2,
                    holiday: false,
                    number: 26,
                    weekend: false,
                },
                {
                    day: 3,
                    holiday: false,
                    number: 27,
                    weekend: false,
                },
                {
                    day: 4,
                    holiday: false,
                    number: 28,
                    weekend: false,
                },
                {
                    day: 5,
                    holiday: false,
                    number: 30,
                    weekend: false,
                },
                {
                    day: 6,
                    holiday: false,
                    number: 31,
                    weekend: false,
                },
            ]
        ],
    },
    {
        name: 'Feb 2018',
        weeks: [
            [
                {
                    day: 2,
                    holiday: false,
                    number: 1,
                    weekend: false,
                },
                {
                    day: 3,
                    holiday: false,
                    number: 2,
                    weekend: false,
                },
            ]
        ],
    },
]

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
    onSubmit(e) {
        console.log(e)
    }

    render() {
        return (
            <Wrapper>
                <Header data-testid="header">
                    <h1>Show Calendar</h1>
                </Header>
                <Form onSubmit={this.onSubmit} />
                <Month className="calendar" />
            </Wrapper>
        )
    }
}

export default App
