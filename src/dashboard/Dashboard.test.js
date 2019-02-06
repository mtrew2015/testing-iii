// Test away
import { render, cleanup } from 'react-testing-library';
import Dashboard from './Dashboard';
import Display from '../display/Display'
import 'jest-dom/extend-expect';
import React from 'react';
import 'react-testing-library/cleanup-after-each';

describe('the controls are shown', () => {
  test('it displays the controls', () => {
  const component = render(<Dashboard/>)
  const controls = component.getByTestId('controls')
  expect(controls).toBeInTheDOM()
  })
})

describe('renders the display', () => {
  test('it shows the display', () => {
    const component = render(<Display/>)
    expect(component).toBeInTheDOM()
  })
})
afterEach(cleanup);