import React, { useState } from 'react';
import { Button } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const FavoritesBtn = () => {
  const [color, setColor] = useState('disabled');

  const handleAddFavorites = () => {
    if (color === 'disabled') {
      setColor('success');
    } else if (color === 'success') {
      setColor('disabled');
    }
  };

  return (
    <Button
      onClick={() => handleAddFavorites()}
      variant="outlined"
      sx={{ p: '4px 10px', color: 'black' }}
    >
      <StarOutlineIcon
        color={color}
        sx={{ mr: '8px', width: '18px', height: '18px', verticalAlign: 'middle' }}
      />
      В избранное
    </Button>
  );
};

export default FavoritesBtn;
