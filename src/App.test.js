import { render, screen } from '@testing-library/react';
import PrimerComponente from './App';

test('renders learn react link', () => {
  render(<PrimerComponente />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
