import { useState, useEffect } from 'react';
import ToggleButtons from '../ToggleButtons/ToggleButtons';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Pagination,
  CircularProgress,
} from '@mui/material';
import useFetch from '../../hooks/useFetch.js';
import RequestCard from '../RequestCard/RequestCard.jsx';

const pageSize = 3;

const RequestsList = () => {
  const { data, loading, error } = useFetch('/request');
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  /* useEffect(() => {
    if (data) {
      const totalPages = Math.ceil(data.length / pageSize);
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize, data.length);
      const currentData = data.slice(startIndex, endIndex);
    }
  }, [data, currentPage]); */

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        border: '1px solid #E0E0E0',
        borderRadius: '2px',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '32px',
            letterSpacing: '0.15px',
            textAlign: 'left',
            color: 'black',
          }}
        >
          Найдено {data ? data.length : 0} запросов
        </Typography>
        <ToggleButtons />
      </Box>

      <Grid container spacing={2}>
        {data &&
          data.slice(0, 3).map((request, index) => <RequestCard key={index} request={request} />)}
      </Grid>

      {/* Pagination block */}
      <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}>
        {data && <Pagination count={10} page={1} onChange={handlePageChange} />}
      </Box>
    </Box>
  );
};

export default RequestsList;
