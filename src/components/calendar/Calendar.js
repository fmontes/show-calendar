import React, { Component } from 'react'
import styled from 'styled-components'

import Month from './Month'

const Wrapper = styled.main`
    display: grid;
    grid-gap: 2vw;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    margin: 0 5vw;
`

class Calendar extends Component {
    render() {
        return (
            <Wrapper data-testid="calendar">
                {this.props.data ? this.props.data.map((month, index) => <Month name={month.name} weeks={month.weeks} key={index} />) : []}
            </Wrapper>
        )
    }
}

export default Calendar
