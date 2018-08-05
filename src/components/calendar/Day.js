import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Td = styled.td`
    background-color: lightgreen;

    &.weekend {
        background-color: yellow;
    }

    &.holiday {
        background-color: orange;
    }

    &.disabled {
        background-color: var(--gray-light);
    }
`

class Day extends Component {
    render() {
        let className = [];
        let number = '';

        if (this.props.data) {
            number = this.props.data.number

            if (this.props.data.weekend) {
                className.push('weekend')
            }

            if (this.props.data.holiday) {
                className.push('holiday')
            }
        } else {
            className.push('disabled')
        }

        return (
            <Td data-testid="day" className={className.join(' ')}>{number}</Td>
        )
    }
}

Day.propTypes = {
    data: PropTypes.object
};

export default Day
