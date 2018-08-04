import React from 'react'
import Week from './Week'
import { render, cleanup } from 'react-testing-library';

afterEach(cleanup)

const tbody = document.createElement('tbody')
const data = [
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

const mockDays = data.map(day => day.number.toString());

it('should have tr', () => {
    const { getByTestId } = render(<Week />, {container: tbody})
    const week = getByTestId('week')
    expect(week).toBeDefined()
})

it('should render full week', () => {
    const { getByTestId } = render(<Week data={data} />, {container: tbody})
    const week = getByTestId('week')
    expect(week.childElementCount).toBe(7)

    const daysOfTheWeek = Array.from(week.childNodes).map(el => el.textContent)
    expect(mockDays).toEqual(daysOfTheWeek)
})

it('should add days to the beggining and render full week', () => {
    const mock = data.slice(4)

    const { getByTestId } = render(<Week data={mock} />, {container: tbody})
    const week = getByTestId('week')
    expect(week.childElementCount).toBe(7)

    const daysOfTheWeek = Array.from(week.childNodes).map(el => el.textContent)
    const customMockDays = [...["", "", "", ""], ...mockDays.slice(4)]
    expect(customMockDays).toEqual(daysOfTheWeek)
})

it('should add days to the end and render full week', () => {
    const mock = data.slice(0, 3)

    const { getByTestId } = render(<Week data={mock} />, {container: tbody})
    const week = getByTestId('week')
    expect(week.childElementCount).toBe(7)

    const daysOfTheWeek = Array.from(week.childNodes).map(el => el.textContent)
    const customMockDays = [...mockDays.slice(0, 3), ...["", "", "", ""]]
    expect(customMockDays).toEqual(daysOfTheWeek)
})