import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { render, cleanup } from 'react-testing-library';
import data from './tests/mocks'

afterEach(cleanup)

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('should have header', () => {
    const { getByTestId } = render(<App />)
    const header = getByTestId('header')
    expect(header.innerHTML).toEqual('<h1>Show Calendar</h1>')
})

it('should have form', () => {
    const { getByTestId } = render(<App />)
    const form = getByTestId('form')
    expect(form).toBeDefined()
})

it('should have month calendar', () => {
    const { getAllByTestId } = render(<App data={data} />)
    const month = getAllByTestId('month')
    expect(month.length).toBe(2)
})
