import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Td = styled.td`
    background-color: lightgreen;

    &.weekend {
        background-color: yellow;
    }

    &.disabled {
        background-color: var(--gray-light);
    }
`

class Day extends Component {
    render() {
        let className = '';
        let number = '';

        if (this.props.data) {
            number = this.props.data.number

            if (this.props.data.weekend) {
                className = 'weekend'
            }
        } else {
            className = 'disabled'
        }

        return (
            <Td data-testid="day" className={className}>{number}</Td>
        )
    }
}

Day.propTypes = {
    data: PropTypes.object
};

export default Day
