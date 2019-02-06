// Test away!
import {render,cleanup} from 'react-testing-library';
import Display from './Display.js';
import React from 'react';
import 'react-testing-library/cleanup-after-each';

afterEach(cleanup);

describe('The Display Component', () => {
  test('it renders red-led to start', () => {
    const {getByTestId} = render (<Display className = 'red-led'/>);
    getByTestId('red-led')
  })
  test('it is locked at the start', () => {
    const {getByTestId} = render(<Display className = 'red-led'/>)
    getByTestId('locked-class')
  })
})
