import React from 'react';

const PlayPauseButton = ({ isPlaying, onTogglePlay }) => {
  return (
    <button onClick={onTogglePlay} className="button">
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
};

export default PlayPauseButton;