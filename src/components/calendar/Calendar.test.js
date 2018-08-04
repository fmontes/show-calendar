import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from './Calendar'
import { render, cleanup } from 'react-testing-library';

const mock = {
    name: 'January 2018',
    weeks: [
        [
            {
                day: 5,
                holiday: true,
                number: 22,
                weekend: false,
            },
            {
                day: 6,
                holiday: false,
                number: 23,
                weekend: false,
            },
        ],
        [
            {
                day: 0,
                holiday: false,
                number: 24,
                weekend: false,
            },
            {
                day: 1,
                holiday: false,
                number: 25,
                weekend: false,
            },
            {
                day: 2,
                holiday: false,
                number: 26,
                weekend: false,
            },
            {
                day: 3,
                holiday: false,
                number: 27,
                weekend: false,
            },
            {
                day: 4,
                holiday: false,
                number: 28,
                weekend: false,
            },
            {
                day: 5,
                holiday: false,
                number: 30,
                weekend: false,
            },
            {
                day: 6,
                holiday: false,
                number: 31,
                weekend: false,
            },
        ]
    ]
}

afterEach(cleanup)

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

it('should render title', () => {
    const { getByTestId } = render(<Calendar name={mock.name} />)
    const name = getByTestId('name')
    expect(name.textContent).toEqual('January 2018')
})

it('should render weeks', () => {
    const { getAllByTestId } = render(<Calendar weeks={mock.weeks} />)
    const weeks = getAllByTestId('week')
    expect(weeks.length).toEqual(2)
})