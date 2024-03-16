import { render } from '@testing-library/react';
import Song from './Song';
import audioData from './audio.json';

describe('Song Component', () => {
  it('does not display the year if it is invalid or out of range', () => {
    const invalidYears = ["Not a year", 1850, 3000]; // Example invalid years

    invalidYears.forEach(year => {
      const { queryByText } = render(
        <Song title="Test Title" artist="Test Artist" year={year} genre="Test Genre" />
      );

      const yearElement = queryByText(`Year: ${year}`);
      expect(yearElement).not.toBeInTheDocument();
    });
  });

});
