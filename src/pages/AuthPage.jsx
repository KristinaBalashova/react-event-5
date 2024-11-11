import AuthForm from '../components/AuthForm/AuthForm';
import useAuth from '../hooks/useAuth';

import { Box, Typography, Grid, Paper } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { testProfiles, userLabels } from '../components/AuthForm';

const AuthPage = () => {
  const { loading, error } = useAuth();

  return (
    <Box>
      <Grid container sx={{ height: '100vh' }}>
        {/* Левая часть - Авторизация */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 4,
            backgroundColor: 'background.default',
          }}
        >
          <Box sx={{ width: '80%', maxWidth: 400, mt: 3 }}>
            {' '}
            {/* Верхний отступ для аккуратного размещения */}
            <Typography variant="h4" component="h1" gutterBottom color="#212121">
              Авторизация
            </Typography>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {/* Размещаем контейнер для уведомлений */}
            <AuthForm testProfiles={testProfiles} />
            {loading && <p>Авторизация...</p>}
          </Box>
        </Grid>

        {/* Правая часть - Тестовые профили */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 4,
            backgroundColor: 'background.paper',
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom color="#212121">
            Тестовые профили
          </Typography>

          {testProfiles.map((profile, index) => (
            <Paper
              key={index}
              sx={{
                padding: 2,
                marginBottom: 2,
                width: '50%',
                textAlign: 'left',
                border: '1px solid #0288D1',
                borderRadius: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InfoOutlinedIcon sx={{ color: '#0288D1', marginRight: 1 }} />{' '}
                <Typography variant="body1" color="#014361" sx={{ fontWeight: 'bold' }}>
                  {userLabels[index]}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 4 }}>
                {' '}
                <Typography variant="body2" color="#014361">
                  Логин: {profile.login}
                </Typography>
                <Typography variant="body2" color="#014361">
                  Пароль: {profile.password}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthPage;
