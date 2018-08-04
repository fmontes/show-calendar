import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import { render, fireEvent, cleanup } from 'react-testing-library'

afterEach(cleanup)

const spy = jest.fn()

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Form onSubmit={spy} />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('should have form', () => {
    const { getByTestId } = render(<Form onSubmit={spy} />)
    const form = getByTestId('form')
    expect(form).toBeDefined()
})

it('should have date field', () => {
    const { getByTestId } = render(<Form onSubmit={spy} />)
    const date = getByTestId('date')
    expect(date.type).toEqual('date')
})

it('should have days field', () => {
    const { getByTestId } = render(<Form onSubmit={spy} />)
    const days = getByTestId('days')
    expect(days.type).toEqual('number')
})

it('should have country field', () => {
    const { getByTestId } = render(<Form onSubmit={spy} />)
    const country = getByTestId('country')
    expect(country.type).toEqual('text')
})

it('should have submit button', () => {
    const { getByTestId } = render(<Form onSubmit={spy} />)
    const submit = getByTestId('submit')
    expect(submit.tagName.toLowerCase()).toEqual('button')
    expect(submit.type).toEqual('submit')
})

it('should NOT submit data', () => {
    const { getByTestId } = render(<Form onSubmit={spy} />)

    const submit = getByTestId('submit')
    fireEvent(
        submit,
        new MouseEvent('click', {
            bubbles: true, // click events must bubble for React to see it
            cancelable: true,
        })
    )
    expect(spy).not.toHaveBeenCalledTimes(1)
})

it('should submit data', () => {
    const { getByTestId } = render(<Form onSubmit={spy} />)

    const date = getByTestId('date')
    date.value = '2018-08-09'

    const days = getByTestId('days')
    days.value = '2'
    
    const country = getByTestId('country')
    country.value = 'CRC'

    fireEvent.change(date);
    fireEvent.change(days);
    fireEvent.change(country);

    const submit = getByTestId('submit')
    fireEvent(
        submit,
        new MouseEvent('click', {
            bubbles: true, // click events must bubble for React to see it
            cancelable: true,
        })
    )
    expect(spy).toHaveBeenCalledTimes(1)
})
