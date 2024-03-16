import { render, screen, fireEvent } from '@testing-library/react';
import PlayPauseButton from './PlayPauseButton';

test('button shows Play or Pause based on isPlaying prop', () => {
  const onTogglePlay = jest.fn();
  const { rerender } = render(<PlayPauseButton isPlaying={false} onTogglePlay={onTogglePlay} />);
  expect(screen.getByText('Play')).toBeInTheDocument();

  // Rerender with isPlaying = true
  rerender(<PlayPauseButton isPlaying={true} onTogglePlay={onTogglePlay} />);
  expect(screen.getByText('Pause')).toBeInTheDocument();
});
