import React, { Component } from 'react'
import styled from 'styled-components'

import Month from './components/calendar/Month'
import Form from './components/form/Form'

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

const Calendars = styled.main`
    display: grid;
    grid-gap: 2vw;
    grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
    margin: 0 5vw;
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
                <Calendars>
                    {this.props.data ? this.props.data.map((month, index) => <Month name={month.name} weeks={month.weeks} key={index} />) : []}
                </Calendars>
            </Wrapper>
        )
    }
}

export default App
