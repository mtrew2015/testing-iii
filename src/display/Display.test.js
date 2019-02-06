// Test away!
import {render,cleanup} from 'react-testing-library';
import Display from './Display.js';
import Dashboard from '../dashboard/Dashboard';
import 'jest-dom/extend-expect';
import React from 'react';
import 'react-testing-library/cleanup-after-each';

afterEach(cleanup);

describe('The Display Component', () => {
  test('it renders green-led to start', () => {
    const component = render (<Display className = 'green-led'/>);
    const closedClass = component.getByTestId('unlocked-class')
    expect(closedClass).toHaveClass('green-led')
  })
  test('it is unlocked at the start', () => {
    const component = render(<Display className = 'green-led'/>)
    const lockedClass = component.getByTestId('closed-class')
    expect(lockedClass).toHaveClass('green-led');
    })
})

describe('displays the correct text based on props', () => {
  test('it is locked when closed props are passed', () => {
  const component = render(<Display closed ='false'> </Display>)
  const closed = component.getByTestId('closed-class')
  expect(closed).toHaveTextContent(/closed/i);
})
  test('it is open when open props are passed', () => {
    const component = render(<Dashboard closed='false'> </Dashboard>)
    const closed = component.getByTestId('closed-class')
    expect(closed).toHaveTextContent(/open/i);
  })
})

describe('displays correct locked or unlocked status', () => {
  test('shows locked when locked', () => {
    const component = render(<Dashboard locked='true'/>)
    const locked = component.getByTestId('unlocked-class')
    expect(locked).toHaveTextContent('locked')
  })
  test('shows unlocked when unlocked', () => {
    const component = render(<Dashboard locked='false' />)
    const locked = component.getByTestId('unlocked-class')
    expect(locked).toHaveTextContent(/unlocked/i)
  })
})
