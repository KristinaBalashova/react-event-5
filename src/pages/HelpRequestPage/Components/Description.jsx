import React from 'react';
import { Grid2, Typography } from '@mui/material';

const Description = ({ data }) => {
  return (
    <Grid2 size={12}>
      <Typography variant="h6" component="h6">
        Кому мы помогаем
      </Typography>
      <Typography sx={{ mt: '10px' }}>{data.description}</Typography>
    </Grid2>
  );
};

export default Description;
