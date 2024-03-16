import React from 'react';

  const ShuffleButton = ({ onShuffle }) => {
      return (
      <button onClick={onShuffle} className="button">
        Shuffle
        </button>
      );
    };
export default ShuffleButton;