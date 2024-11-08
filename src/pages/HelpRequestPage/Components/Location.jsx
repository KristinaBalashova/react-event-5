import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';

const Location = ({ data }) => {
  return (
    <Grid2>
      <Typography variant="h6" component="h6">
        Локация
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
        <Typography sx={{ mr: '4px', mt: '10px', fontWeight: '500' }}>Область:</Typography>
        {data.location.district}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'baseline', mt: '4px' }}>
        <Typography sx={{ mr: '4px', mt: '4px', fontWeight: '500' }}>Населённый пункт:</Typography>
        {data.location.city}
      </Box>
    </Grid2>
  );
};

export default Location;
