import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Dashboard from './Dashboard'


describe('<Dashboard/>', () => {
    it('should show the controls and display', () => {
        const {getByText } = render(<Dashboard />)

        getByText(/Close Gate/i)
        getByText('Unlocked')
        getByText(/open/i)
        getByText(/Lock Gate/i)
    })

    it('cant be closed or open if locked', () => {
        const {getByText} = render(<Dashboard />)
        
        const closeGate = getByText(/Close Gate/i)
        const lockGate = getByText(/Lock Gate/i)

        fireEvent.click(closeGate)
        fireEvent.click(lockGate)

        getByText('Locked')
        getByText(/Unlock Gate/)
        getByText('Open Gate')
        expect('Closed').not.toBe('Open');
    })
})
