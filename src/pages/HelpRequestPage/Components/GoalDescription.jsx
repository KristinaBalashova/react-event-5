import React from 'react';
import { Grid2, Typography } from '@mui/material';

const GoalDescription = ({ data }) => {
  return (
    <Grid2 size={12}>
      <Typography variant="h6" component="h6">
        Цель сбора
      </Typography>
      <Typography sx={{ mt: '10px' }}>{data.goalDescription}</Typography>
    </Grid2>
  );
};

export default GoalDescription;
