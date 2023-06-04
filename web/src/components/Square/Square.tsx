import React from 'react';

const Square = ({ id }) => {
  return (
    <td style={{ backgroundColor: '#6187DA' }}>
      <div style={{ width: '100%', height: '100%', backgroundColor: '#F5BBD1', borderRadius: '5%',color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {id}
      </div>
    </td>
  );
};

export default Square;