import { Box, Paper, Typography } from '@mui/material';
import useFetch from '../hooks/useFetch';
import { UserInfoCard } from '../components/UserInfoCard/UserInfoCard';
import { ProfileTabs } from '../components/tabs/ProfileTabs';
import { MainContainer } from '../components/container/MainContainer';

const ProfilePage = () => {
  const { data } = useFetch('/user');

  return (
    <Box component="section">
      <MainContainer>
        <Paper variant="outlined" sx={{ pt: '30px', pb: 8, px: 5, backgroundColor: '#F5F5F5' }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2.5, textAlign: 'left' }}>
            Мой профиль
          </Typography>
          <Box sx={{ display: 'flex', gap: 2.5 }}>
            <UserInfoCard userData={data} />
            <ProfileTabs userData={data} />
          </Box>
        </Paper>
      </MainContainer>
    </Box>
  );
};
export default ProfilePage;
