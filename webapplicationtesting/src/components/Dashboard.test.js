import React from 'react'
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom'
import Dashboard, {incrementStrike, incrementBall, foul, hit} from './Dashboard'

test('renders without crashing', ()=>{
    const wrapper = rtl.render(<Dashboard/>);
    console.log(wrapper);
})

test('does the strike button work', ()=>{
    expect(incrementStrike)
})