import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NextButton from './NextButton';

describe('NextButton Component', () => {
  it('triggers the passed function when clicked', () => {
    const mockNextFunction = jest.fn();
    const { getByText } = render(<NextButton onNext={mockNextFunction} />);
    fireEvent.click(getByText('Next'));
    expect(mockNextFunction).toHaveBeenCalled();
  });
});
