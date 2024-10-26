import React from 'react';
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

const RequestsList = () => {
  const requests = [];

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
          Найдено {requests ? requests.length : 0} запросов
        </Typography>
        <ToggleButtons />
      </Box>

      <Grid container spacing={2}>
        {requests &&
          requests.map((request, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {request.title}
                  </Typography>
                  {/* Add other request details here */}
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>

      {/* Pagination block */}
      <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}>
        <Pagination count={10} page={0} onChange={(event, value) => console.log(value)} />
      </Box>
    </Box>
  );
};

export default RequestsList;
