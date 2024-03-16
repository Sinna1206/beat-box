import React from 'react';

const Status = ({ statusMessage }) => {
  const statusStyle = {
    padding: '10px',
    margin: '20px 0',
    border: '1px solid #ddd',
    backgroundColor: '#f3f3f3',
    textAlign: 'center', 
    fontSize: '18px', 
    fontWeight: 'bold',
  };

  return (
    <div style={statusStyle}>
      {statusMessage}
    </div>
  );
};

export default Status;
