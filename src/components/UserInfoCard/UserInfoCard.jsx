import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardActions,
  CardMedia,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import AvatarIcon from '../../assets/avatar.svg?react';

export const UserInfoCard = ({ userData }) => {
  const { auth, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (!!auth) {
      logout();
      navigate('/');
    }
  };

  return (
    <Box sx={{ flex: '0 1 20%' }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 1,
        }}
      >
        <CardMedia sx={{ p: '40px 53px' }}>
          <AvatarIcon />
        </CardMedia>
        <Divider />
        <CardContent sx={{ p: 2.5, textAlign: 'left' }}>
          <Typography variant="h6" sx={{ mb: '10px' }}>
            {`${userData?.name} ${userData?.lastName}`}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <Typography variant="subtitle2">Статус:</Typography>
            <Typography variant="body2">{userData?.status}</Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ p: 2.5 }}>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            sx={{ width: '100%' }}
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
