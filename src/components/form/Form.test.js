import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import { render } from 'react-testing-library';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Form />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('should have form', () => {
    const { getByTestId } = render(<Form />);
    const form = getByTestId('form');
    expect(form).toBeDefined();
})

it('should have date field', () => {
    const { getByTestId } = render(<Form />);
    const date = getByTestId('date');
    expect(date.type).toEqual('date');
})

it('should have days field', () => {
    const { getByTestId } = render(<Form />);
    const days = getByTestId('days');
    expect(days.type).toEqual('number');
})

it('should have country field', () => {
    const { getByTestId } = render(<Form />);
    const country = getByTestId('country');
    expect(country.type).toEqual('text');
})

it('should have submit button', () => {
    const { getByTestId } = render(<Form />);
    const submit = getByTestId('submit');
    expect(submit.tagName.toLowerCase()).toEqual('button');
    expect(submit.type).toEqual('submit');
})
