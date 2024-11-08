//import RequestsList from '../components/RequestsList/RequestsList';
import React, { useEffect } from 'react';
import RequestsList from '../components/RequestsList/RequestsList';
import Search from '../components/Search/Search';
import { Box } from '@mui/material';
import FilterPanel from '../components/FilterPanel/FilterPanel';
import useFetch from '../hooks/useFetch';
import { useTheme } from '@mui/material/styles';

const CatalogPage = () => {
  const { data, loading, error } = useFetch('/request');
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        height: '100%',
        padding: '30px 40px',
        backgroundColor: theme.palette.background.primary,
        maxWidth: '1500px',
      }}
    >
      <Box sx={{ flexBasis: '25%', flexShrink: 0 }}>{data && <FilterPanel data={data} />}</Box>
      <Box
        sx={{
          flexBasis: '75%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Search />
        {data && <RequestsList data={data} variant={'catalog'} />}
      </Box>
    </Box>
  );
};

export default CatalogPage;
