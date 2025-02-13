import React from 'react';

const BarraDeProgresso = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px', marginBottom: '20px' }}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: '#76c7c0',
          height: '10px',
          borderRadius: '5px',
        }}
      ></div>
    </div>
  );
};

export default BarraDeProgresso;