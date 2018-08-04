import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Week from './Week'

const CalendarWrapper = styled.div`
`

const Table = styled.table`
    border-collapse: collapse;

    th {
        background-color: var(--gray-light);
    }

    th, td {
        padding: var(--space);
    }
`

class Calendar extends Component {
    render() {
        return (
            <CalendarWrapper>
                <h3 data-testid="name">{this.props.name}</h3>
                <Table data-testid="calendar">
                    <thead>
                        <tr data-testid="headings">
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.weeks ? this.props.weeks.map((week, index) => <Week data={week} key={index} />) : [] }
                    </tbody>
                </Table>
            </CalendarWrapper>
        )
    }
}

Calendar.propTypes = {
    data: PropTypes.arrayOf(PropTypes.array)
};

export default Calendar
