import React from 'react';

const NextButton = ({ onNext }) => {
  return (
    <button onClick={onNext} className="button">
      Next
    </button>
  );
};

export default NextButton;
