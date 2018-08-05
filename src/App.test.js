import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { render, cleanup } from 'react-testing-library';

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

it('should have calendar', () => {
    const { getAllByTestId } = render(<App />)
    const month = getAllByTestId('calendar')
    expect(month.length).toBe(1)
})

xit('should show and hide loading indicator accordingly', () => {})