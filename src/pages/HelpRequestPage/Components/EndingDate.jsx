import React from 'react';
import { Grid2, Typography } from '@mui/material';

const EndingDate = ({ data }) => {
  return (
    <Grid2 size={12}>
      <Typography variant="h6" component="h6">
        Завершение
      </Typography>
      <Typography sx={{ mt: '10px' }}>{data.endingDate}</Typography>
    </Grid2>
  );
};

export default EndingDate;
