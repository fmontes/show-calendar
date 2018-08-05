import React from 'react'
import Day from './Day'
import { render, cleanup } from 'react-testing-library';

afterEach(cleanup)

const tr = document.createElement('tr')
let mock = {
    day: 5,
    holiday: null,
    number: 22,
    weekend: false,
}

it('should have td', () => {
    const { getByTestId } = render(<Day data={mock} />, {container: tr})
    const day = getByTestId('day')
    expect(day).toBeDefined()
})

it('should render week day', () => {
    const { getByTestId } = render(<Day data={mock} />, {container: tr})
    const day = getByTestId('day')
    expect(day.textContent).toEqual('22')
})

it('should render weekend day', () => {
    mock = {
        ...mock,
        weekend: true
    }

    const { getByTestId } = render(<Day data={mock} />, {container: tr})
    const day = getByTestId('day')
    expect(day.textContent).toEqual('22')
    expect(day.classList.contains('weekend')).toBe(true)
})

it('should render disabled day', () => {
    mock = null
    const { getByTestId } = render(<Day data={mock} />, {container: tr})
    const day = getByTestId('day')
    expect(day.textContent).toEqual('')
    expect(day.classList.contains('disabled')).toBe(true)
})

it('should render holiday', () => {
    mock = {
        ...mock,
        holiday: {
            name: 'Fake Holiday'
        }
    }
    const { getByTestId } = render(<Day data={mock} />, {container: tr})
    const day = getByTestId('day')
    expect(day.classList.contains('holiday')).toBe(true)

    const tooltip = getByTestId('tooltip')
    expect(tooltip.textContent).toEqual('Fake Holiday')
})