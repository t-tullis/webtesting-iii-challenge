import React from 'react';
import { render, fireEvent, } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Controls from './Controls';

describe('<Controls />', () => {
    it('should control close gate', () => {
        const closed = jest.fn();

        const {getByText} = render(<Controls toggleClosed={closed}/>);

        const closeGate = getByText(/close gate/i)

        fireEvent.click(closeGate)

        expect(closed).toHaveBeenCalled()
    }); 
    
    it('should control open gate', () => {
        const open = jest.fn();
        const controlProps ={
            closed: true
        }

        const {getByText} = render(<Controls {...controlProps} toggleClosed={open}/>);
    
        const openGate = getByText(/open gate/i)
        
        fireEvent.click(openGate)

        expect(open).toHaveBeenCalled()
    }); 

    it('Controls lock', () => {
        const locked = jest.fn();
        const controlProps = {
            locked: false,
            closed: true
        }
        const {getByText} = render(<Controls {...controlProps} toggleLocked={locked}/>);
        
        const lockGate = getByText(/lock gate/i)
        
        fireEvent.click(lockGate)

        expect(locked).toHaveBeenCalled()
   }); 

   it('Controls unlock', () => {
       const unlocked = jest.fn();
       const controlProps = {
           locked: true,
           closed: true
       }
       const { getByText} =  render(<Controls {...controlProps} toggleLocked={unlocked} />)

       const unlockGate = getByText(/unlock gate/i)

       fireEvent.click(unlockGate)

       expect(unlocked).toHaveBeenCalled()
   })
})
