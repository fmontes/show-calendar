import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { render } from 'react-testing-library';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('should have header', () => {
    const { getByTestId } = render(<App />);
    const header = getByTestId('header');
    expect(header.innerHTML).toEqual('<h1>Show Calendar</h1>');
})

it('should have form', () => {
    const { getByTestId } = render(<App />);
    const form = getByTestId('form');
    expect(form).toBeDefined();
})

it('should have month calendar', () => {
    const { getByTestId } = render(<App />);
    const month = getByTestId('month');
    expect(month).toBeDefined();
})
