import { Box, Typography } from '@mui/material';
import React from 'react';

const ErrorComponent = () => {
  return (
    <Box sx={{ width: '1008px', height: '843px', p: '276px 0 0 280px' }}>
      <img src="./Group2.png" alt="Error" style={{ width: 419 + 'px', height: 240 + 'px' }} />
      <Typography variant="h5" component="h5" color="error">
        Ошибка! Не удалось загрузить запросы
      </Typography>
    </Box>
  );
};

export default ErrorComponent;
