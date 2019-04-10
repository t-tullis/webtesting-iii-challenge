import React from 'react'
// import renderer from 'react-test-renderer'
import {render} from 'react-testing-library'
import Display from './Display';


describe('<Display />', () => {
    it('gate is defaulted to unlocked and open', () => {
        const {getByText } = render(<Display />)

        getByText('Unlocked')
        getByText(/open/i)
    })
})