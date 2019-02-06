// Test away!
import {render,cleanup} from 'react-testing-library';
import Display from './Display.js';
import React from 'react';
import 'react-testing-library/cleanup-after-each';

afterEach(cleanup);

describe('The Display Component', () => {
  test('it renders green-led to start', () => {
    const {getByTestId} = render (<Display className = 'green-led'/>);
    getByTestId('green-led')
  })
  test('it is unlocked at the start', () => {
    const {getByTestId} = render(<Display className = 'green-led'/>)
    getByTestId('unlocked-class')
  })
})
