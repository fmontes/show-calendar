import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from './Calendar'
import { render } from 'react-testing-library';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Calendar />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('should have table', () => {
    const { getByTestId } = render(<Calendar />)
    const table = getByTestId('calendar')
    expect(table).toBeDefined()
})

it('should have days header', () => {
    const { getByTestId } = render(<Calendar />)
    const headings = getByTestId('headings')    
    const daysFromCalendar = Array.from(headings.childNodes).map(el => el.textContent)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    
    expect(daysFromCalendar).toEqual(days)
})