import React from 'react'
// import renderer from 'react-test-renderer'
import {render} from 'react-testing-library'
import Display from './Display';
import 'react-testing-library/cleanup-after-each'


describe('<Display />', () => {
    it('displays if gate open/close locked/unlocked and is defaulted to unlocked and open', () => {
        const {getByText } = render(<Display />)

        getByText('Unlocked')
        getByText(/open/i)
    })

    it('displays closed if prop is true', () => {
        const {getByText} = render(<Display  />)
        
        if(Display.defaultProps.closed === true){
            getByText(/closed/i)
        }else{
            getByText(/open/i)
        }
    })

    it('displays locked if prop is true', () => {
        const {getByText} = render(<Display  />)
        
        if(Display.defaultProps.locked === true){
            getByText(/Locked/i)
            }else{
                getByText(/Unlocked/i)
            }
    })

    // it('displays red-led when locked or closed', () => {

    //     if(Display.defaultProps.locked === true || Display.defaultProps.closed === true){
    //         expect((<Display />).find(".lockedClass").toBe('red-led'))
    //         }
    // })
})