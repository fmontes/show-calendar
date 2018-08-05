import React from 'react'
import Calendar from './Calendar'
import { render, cleanup } from 'react-testing-library';
import data from '../../tests/mocks'

afterEach(cleanup)

it('should have month calendar', () => {
    const { getAllByTestId } = render(<Calendar data={data} />)
    const month = getAllByTestId('month')
    expect(month.length).toBe(2)
})
