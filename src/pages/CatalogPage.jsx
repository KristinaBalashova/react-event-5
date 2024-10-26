import React, { useEffect } from 'react';
import RequestsList from '../components/RequestsList/RequestsList';
import Search from '../components/Search/Search';
import { useAuthContext } from '../context/AuthContext';
import { Box } from '@mui/material';

const CatalogPage = () => {
  const { auth, token } = useAuthContext();

  useEffect(() => {
    if (auth) {
      console.log('User is authenticated with token:', token);
    } else {
      console.log('User is not authenticated');
    }
  }, [auth, token]);

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
