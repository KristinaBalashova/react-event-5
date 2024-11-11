import { Box, Paper, Typography } from '@mui/material';
import useFetch from '../hooks/useFetch';
import { UserInfoCard } from '../components/UserInfoCard/UserInfoCard';
import { ProfileTabs } from '../components/tabs/ProfileTabs';
import { MainContainer } from '../components/container/MainContainer';

const ProfilePage = () => {
  const { data } = useFetch('/user');

  console.log('Data:', data);

  return (
    <Paper variant="outlined" component="section" sx={{ backgroundColor: '#F5F5F5' }}>
      <Box sx={{ p: '30px 40px 64px' }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2.5, textAlign: 'left' }}>
          Мой профиль
        </Typography>
        <Box sx={{ display: 'flex', gap: 2.5 }}>
          <UserInfoCard userData={data} />
          <ProfileTabs userData={data} />
        </Box>
      </Box>
    </Paper>
  );
};
export default ProfilePage;
