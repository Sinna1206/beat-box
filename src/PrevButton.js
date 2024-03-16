import React from 'react';

const PrevButton = ({ onPrev }) => {
  return (
    <button onClick={onPrev} className="button">
      Prev
    </button>
  );
};
export default PrevButton;
