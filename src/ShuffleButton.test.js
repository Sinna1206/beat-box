import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShuffleButton from './ShuffleButton';

describe('ShuffleButton Component', () => {
  it('triggers the passed function when clicked', () => {
    const mockShuffleFunction = jest.fn();
    const { getByText } = render(<ShuffleButton onShuffle={mockShuffleFunction} />);
    fireEvent.click(getByText('Shuffle'));
    expect(mockShuffleFunction).toHaveBeenCalled();
  });
});
