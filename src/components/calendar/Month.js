import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Week from './Week'

const MonthWrapper = styled.div`
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

class Month extends Component {
    render() {
        return (
            <MonthWrapper data-testid="month">
                <h3 data-testid="name">{this.props.name}</h3>
                <Table>
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
            </MonthWrapper>
        )
    }
}

Month.propTypes = {
    data: PropTypes.arrayOf(PropTypes.array)
};

export default Month
