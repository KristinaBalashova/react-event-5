import React from 'react';
import { Grid2, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const Organization = ({ data }) => {
  return (
    <Grid2 size={12}>
      <Typography variant="h6" component="h6">
        Организация
      </Typography>
      <Typography sx={{ mt: '10px' }}>{data.organization.title}</Typography>
      {data.organization.isVerified && (
        <Typography>
          <VerifiedIcon
            color="success"
            sx={{ mr: '4px', width: '20px', height: '20px', verticalAlign: 'middle' }}
          />
          Организация проверена
        </Typography>
      )}
    </Grid2>
  );
};

export default Organization;
