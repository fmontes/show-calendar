import React from 'react'
import Day from './Day'
import { render, cleanup } from 'react-testing-library';

afterEach(cleanup)

// {
//     day: 5,
//     holiday: true,
//     number: 22,
//     weekend: false,
// },

const tr = document.createElement('tr')
let mock = {
    day: 5,
    holiday: true,
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
    expect(day.classList).toContain('weekend')
})

it('should render disabled day', () => {
    mock = null
    const { getByTestId } = render(<Day data={mock} />, {container: tr})
    const day = getByTestId('day')
    expect(day.textContent).toEqual('')
    expect(day.classList.contains('disabled')).toBe(true)
})