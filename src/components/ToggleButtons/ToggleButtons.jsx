import React, { useState } from 'react';

const ToggleButtons = () => {
  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    { id: 'list', label: 'List', url: 'images/list.svg' },
    { id: 'grid', label: 'Grid', url: 'images/grid.svg' },
    { id: 'location', label: 'Location', url: 'images/location.svg' },
  ];

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  return (
    <div style={{ display: 'flex' }}>
      {buttons.map((button) => (
        <div
          key={button.id}
          onClick={() => handleButtonClick(button.id)}
          style={{
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: activeButton === button.id ? 'rgba(0, 0, 0, 0.08)' : '#ffffff',
            border: '2px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '2px',
            cursor: 'pointer',
            padding: '5px',
          }}
        >
          <img src={button.url} alt={button.label} />
        </div>
      ))}
    </div>
  );
};

export default ToggleButtons;
