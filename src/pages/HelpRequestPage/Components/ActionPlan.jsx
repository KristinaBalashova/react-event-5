import React from 'react';
import { Grid2, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ActionPlan = ({ data }) => {
  const actionStep = data.actionsSchedule.map((step) => {
    return (
      <Grid2 size={12} key={step.stepLabel}>
        <Typography>
          {step.isDone ? (
            <CheckCircleOutlineIcon
              color="success"
              sx={{
                marginRight: '4px',
                verticalAlign: 'middle',
                width: '24px',
                height: '24px',
              }}
            />
          ) : (
            <CheckCircleOutlineIcon
              color="disabled"
              sx={{
                marginRight: '4px',
                verticalAlign: 'middle',
                width: '24px',
                height: '24px',
              }}
            />
          )}
          {step.stepLabel}
        </Typography>
      </Grid2>
    );
  });

  return (
    <Grid2 size={12}>
      <Typography variant="h6" component="h6">
        План действий
      </Typography>
      <Grid2 container sx={{ mt: '10px' }}>
        {actionStep}
      </Grid2>
    </Grid2>
  );
};

export default ActionPlan;
