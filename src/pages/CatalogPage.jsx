import React, { useEffect } from 'react';
import RequestsList from '../components/RequestsList/RequestsList';
import Search from '../components/Search/Search';
import { Box } from '@mui/material';

const CatalogPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        flexGrow: 1,
        height: '100%',
      }}
    >
      <Search />
      <RequestsList />
    </Box>
  );
};
export default CatalogPage;
