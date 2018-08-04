import React, { Component } from 'react'
import styled from 'styled-components'

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
            <Table data-testid="calendar">
                <thead>
                    <tr>
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
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default Calendar
