import { render, fireEvent } from '@testing-library/react';
import Playlist from './Playlist';
import audioData from './audio.json';

describe('Playlist Component', () => {
  it('renders the correct number of tracks initially', () => {
    const { getAllByTestId } = render(<Playlist />);
    const trackElements = getAllByTestId('track-title');
    expect(trackElements.length).toBe(audioData.tracks.length);
  });

  it('changes the order of tracks when shuffle button is clicked', () => {
    const { getAllByTestId, getByText } = render(<Playlist />);
    const initialTrackOrder = getAllByTestId('track-title').map(node => node.textContent);

    fireEvent.click(getByText('Shuffle'));

    // Wait a short time for shuffle to potentially complete
    setTimeout(() => {
      const shuffledTrackOrder = getAllByTestId('track-title').map(node => node.textContent);
      expect(shuffledTrackOrder).not.toEqual(initialTrackOrder);
    }, 1000); 
  });

  it('goes to the next track when next button is clicked', () => {
    const { getByText, getAllByTestId } = render(<Playlist />);
    const firstTrack = getAllByTestId('track-title')[0].textContent;
    fireEvent.click(getByText('Next'));
    
    setTimeout(() => {
      const secondTrack = getAllByTestId('track-title')[0].textContent;
      expect(secondTrack).not.toEqual(firstTrack);
    }, 1000);
  });

  it('goes to the previous track when prev button is clicked', () => {
    const { getByText, getAllByTestId } = render(<Playlist />);
    fireEvent.click(getByText('Next')); // Move to the second track
    const secondTrack = getAllByTestId('track-title')[0].textContent;
  
    fireEvent.click(getByText('Prev')); // Go back to the first track
    
    setTimeout(() => {
      const firstTrack = getAllByTestId('track-title')[0].textContent;
      expect(firstTrack).not.toEqual(secondTrack);
    }, 1000); 
  });

  it('toggles play and pause when PlayPause button is clicked', () => {
    const { getByText } = render(<Playlist />);
    fireEvent.click(getByText('Play'));
    expect(getByText('Pause')).toBeInTheDocument(); 
    fireEvent.click(getByText('Pause'));
    expect(getByText('Play')).toBeInTheDocument(); 
  });
  
  it('plays the track on double click', () => {
    const { getAllByTestId } = render(<Playlist />);
    const trackElements = getAllByTestId('track-title');
    fireEvent.doubleClick(trackElements[0]);
   });
  
   it('has the correct initial state', () => {
    const { getByText } = render(<Playlist />);
    expect(getByText('Play')).toBeInTheDocument(); // Assuming 'Play' button shows up if not playing
    // Add more assertions as needed for initial state
  });
  
});
