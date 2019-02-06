// Test away
import { render, cleanup } from 'react-testing-library';
import Dashboard from './Dashboard';
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
afterEach(cleanup);