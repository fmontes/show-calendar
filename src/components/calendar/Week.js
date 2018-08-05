import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Day from './Day'

const getEmptyDays = (howMany) => new Array(howMany).fill(null)
const DAYS_IN_WEEK = 7


class Week extends Component {
    fillUpWeek(data) {
        const firstDay = data[0].day
        const lastDay = data[data.length - 1].day

        let result = [...data]

        if (firstDay > 0) {
            result = [...getEmptyDays(firstDay), ...result]
        }

        if (lastDay < 6) {
            result = [...result, ...getEmptyDays(DAYS_IN_WEEK - lastDay - 1)]
        }

        return result
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
            <tr data-testid="week">
                {days}
            </tr>
        )
    }
}

Week.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
};

export default Week
