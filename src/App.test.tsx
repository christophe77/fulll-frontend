import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Github users search/i);
  expect(linkElement).toBeInTheDocument();
});
