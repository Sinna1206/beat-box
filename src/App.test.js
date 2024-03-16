import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the BEATS title and playlist', () => {
  render(<App />);
  const titleElement = screen.getByText(/BEATS/i);
  expect(titleElement).toBeInTheDocument();

  const shuffleButton = screen.getByText(/Shuffle/i);
  expect(shuffleButton).toBeInTheDocument();

  const nextButton = screen.getByText(/Next/i);
  expect(nextButton).toBeInTheDocument();

  const PlayButton = screen.getByText(/Play/i);
  expect(PlayButton).toBeInTheDocument();

  const PrevButton = screen.getByText(/Prev/i);
  expect(PrevButton).toBeInTheDocument();

});

