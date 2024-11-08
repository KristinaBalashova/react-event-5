import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid2, Paper } from '@mui/material';
import Title from './Components/Title';
import Organization from './Components/Organization';
import Description from './Components/Description';
import GoalDescription from './Components/GoalDescription';
import ActionPlan from './Components/ActionPlan';
import EndingDate from './Components/EndingDate';
import Location from './Components/Location';
import Contacts from './Components/Contacts';
import FavoritesBtn from './Components/FavoritesBtn';
import Header from './Components/Header';
import { useTheme } from '@mui/material/styles';
import useFetch from '../../hooks/useFetch';

const HelpRequestPage = () => {
  const { itemId } = useParams();
  const theme = useTheme();
  const { data, loading, error } = useFetch(`/request/${itemId}`);

  const wrapperStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginTop: '30px',
    width: '1080px',
    padding: '40px 36px',
  };

  return (
    <Box>
      {data ? (
        <Paper
          sx={{
            padding: '30px 40px 64px 40px',
            backgroundColor: theme.palette.background.primary,
          }}
        >
          <Header />
          <Paper sx={wrapperStyles}>
            <Grid2 container rowSpacing="30px" sx={{ width: '550px' }}>
              <Title data={data} />
              <Organization data={data} />
              <Description data={data} />
              <GoalDescription data={data} />
              <ActionPlan data={data} />
              <EndingDate data={data} />
              <Location data={data} />
              <Contacts data={data} />
            </Grid2>
            <FavoritesBtn />
          </Paper>
        </Paper>
      ) : (
        <p>Page item is not present</p>
      )}
    </Box>
  );
};

export default HelpRequestPage;
