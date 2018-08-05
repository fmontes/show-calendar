import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Td = styled.td`
    background-color: lightgreen;
    position: relative;

    &.weekend {
        background-color: yellow;
    }

    &.holiday {
        background-color: orange;
    }

    &.disabled {
        background-color: var(--gray-light);
    }

    &:hover {
        span {
            opacity: 1
        }
    }
`

const Tooltip = styled.span`
    background-color: var(--gray);
    color: #FFF;
    left: 0;
    opacity: 0;
    padding: 4px;
    position: absolute;
    transition: opacity 250ms ease-in;
    top: 100%;
    white-space: nowrap;
    z-index: 1;
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
            <Td data-testid="day" className={className.join(' ')}>
                {number}
                {this.props.data && this.props.data.holiday ? <Tooltip data-testid="tooltip">{this.props.data.holiday.name}</Tooltip> : []}
            </Td>
        )
    }
}

Day.propTypes = {
    data: PropTypes.object
};

export default Day
