import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

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
    <Box style={{ display: 'flex', border: '2px solid rgba(0, 0, 0, 0.08)', borderRadius: '4px' }}>
      {buttons.map((button, index) => (
        <Button
          key={button.id}
          onClick={() => handleButtonClick(button.id)}
          sx={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: activeButton === button.id ? 'rgba(0, 0, 0, 0.08)' : '#ffffff',
            borderLeft: index > 0 ? '2px solid rgba(0, 0, 0, 0.08)' : 'none',
            cursor: 'pointer',
            padding: 0,
            minWidth: '0px'
          }}
        >
          <img src={button.url} alt={button.label} style={{ width: '20px', height: '20px' }} />
        </Button>
      ))}
    </Box>
  );
};

export default ToggleButtons;