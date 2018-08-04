import React, { Component } from 'react'
import styled from 'styled-components'
import Day from './Day'

const DAYS_IN_WEEK = 7

const Tr = styled.tr`
`

class Week extends Component {
    fillUpWeek(data) {
        const daysMissing = DAYS_IN_WEEK - data.length
        const fillUp = new Array(daysMissing).fill(null)
        return data[0].day === 0 ? [...data, ...fillUp] : [...fillUp, ...data]
    }

    render() {
        let days = [];

        if (this.props.data) {
            let daysData;

            if (this.props.data.length === DAYS_IN_WEEK) {
                daysData = [...this.props.data]
            } else {
                daysData = this.fillUpWeek(this.props.data)
            }

            days = daysData.map((day, index) => {
                return (<Day key={index} data={day} />)
            })
        }
        
        return (
            <Tr data-testid="week">
                {days}
            </Tr>
        )
    }
}

export default Week
