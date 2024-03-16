import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PrevButton from './PrevButton';

describe('PrevButton Component', () => {
  it('triggers the passed function when clicked', () => {
    const mockPrevFunction = jest.fn();
    const { getByText } = render(<PrevButton onPrev={mockPrevFunction} />);
    fireEvent.click(getByText('Prev'));
    expect(mockPrevFunction).toHaveBeenCalled();
  });
});
