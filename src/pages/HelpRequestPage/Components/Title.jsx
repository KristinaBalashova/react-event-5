import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';

const Title = ({ data }) => {
  return (
    <Grid2 size={12}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" component="h5">
          {data.title.split(']')[1]}
        </Typography>
      </Box>
    </Grid2>
  );
};

export default Title;
