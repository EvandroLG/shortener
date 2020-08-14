import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByTestId } = render(<App />);
  const title = getByTestId('title');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Shortener');
});

test('renders form', () => {
  const { getByTestId } = render(<App />);
  const form = getByTestId('form');
  const input = form.querySelector('[data-testid="input"]');
  const button = form.querySelector('[data-testid="button-submit"]');

  expect(form).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(button).toHaveTextContent('Shorten!');
});
