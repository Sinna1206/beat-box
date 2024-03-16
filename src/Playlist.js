import React, { useState, useEffect } from 'react';
import Song from './Song'; 
import Podcast from './Podcast'; 
import Status from './Status';
import PlayPauseButton from './PlayPauseButton'; 
import PrevButton from './PrevButton'; 
import NextButton from './NextButton'; 
import ShuffleButton from './ShuffleButton';
import audioData from './audio.json';

const Playlist = () => {
  // Filter tracks to include those with a title or an episodeTitle
  const validTracks = audioData.tracks.filter(track => track.title || track.episodeTitle);
  const [tracks, setTracks] = useState(validTracks);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [statusMessage, setStatusMessage] = useState('Paused');

  useEffect(() => {
    if (tracks.length > 0 && currentTrackIndex < tracks.length) {
        const currentTrack = tracks[currentTrackIndex];
        const message = isPlaying 
            ? `Playing: ${currentTrack.title || currentTrack.episodeTitle}` 
            : 'Paused';
        setStatusMessage(message);
    }
}, [currentTrackIndex, tracks, isPlaying]);

  const shuffleTracks = () => {
    setTracks(prevTracks => {
      let shuffled = [...prevTracks];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setCurrentTrackIndex(0); 
      setIsPlaying(true);
      return shuffled;
    });
  };

  const handleTrackDoubleClick = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    const track = tracks[index];
    setStatusMessage(`Playing: ${track.title || track.episodeTitle}`);
  };

  const handlePrev = () => {
    const newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(newIndex);
    const track = tracks[newIndex];
    setStatusMessage(`Playing: ${track.title || track.episodeTitle}`);
  };

  const handleNext = () => {
    const newIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(newIndex);
    const track = tracks[newIndex];
    setIsPlaying(true);
    setStatusMessage(`Playing: ${track.title || track.episodeTitle}`);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    const track = tracks[currentTrackIndex];
    setStatusMessage(isPlaying ? 'Paused' : `Playing: ${track.title || track.episodeTitle}`);
  };

  return (
    <div>
      <div className="controls">
        <ShuffleButton onShuffle={shuffleTracks} />
        <PrevButton onPrev={handlePrev} />
        <PlayPauseButton isPlaying={isPlaying} onTogglePlay={togglePlayPause} />
        <NextButton onNext={handleNext} />
      </div>
      <Status statusMessage={statusMessage} />
      <div className="playlist-grid">
        {tracks.map((track, index) => (
          <div 
            key={index} 
            data-testid="track-title"
            className={`playlist-item ${currentTrackIndex === index ? 'active' : ''}`}
            onDoubleClick={() => handleTrackDoubleClick(index)}
          >
            {track.title && <Song {...track} />}
            {track.episodeTitle && !track.title && <Podcast {...track} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
