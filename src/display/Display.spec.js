import React from 'react'
import {render} from 'react-testing-library'
import Display from './Display';
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'


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

    it('displays red-led if locked is true else green for unlocked', () => {
            const {getByText} = render(<Display  />);
            
            if(Display.defaultProps.locked === true){
            const locked= getByText('Locked')
            
            expect(locked).toHaveClass("red-led")
            }
            else{
                const unlocked = getByText('Unlocked')
                
                expect(unlocked).toHaveClass("green-led")
                }
    })
    
    it('displays red-led if closed is true else green led for open', () => {
        const {getByText} = render(<Display  />);
        
        if(Display.defaultProps.closed === true){
            const closed = getByText(/Closed/i)
            
            expect(closed).toHaveClass("red-led")
        }else{
            const open = getByText(/open/i)
            
            expect(open).toHaveClass("green-led")
            }
        })
})