import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';
import useAuth from '../hooks/useAuth';

import { Box, Typography, Grid, Paper } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { useAuthContext } from '../context/AuthContext';


const AuthPage = () => {
  const navigate = useNavigate();
  const { authenticate, loading, error } = useAuth();
  const { login, logout, auth } = useAuthContext();

  console.log(auth, 'auth');

  const onSubmit = async (formData) => {
    const authData = await authenticate(formData);
    if (authData) {
      console.log(authData, 'data for auth');
      login(authData.token);
      navigate('/catalogue');
    }
  };


  const testProfiles = [
    { username: 'testUser12@test.com', password: 'password12' },
    { username: 'testUser13@test.com', password: 'password13' },
    { username: 'testUser14@test.com', password: 'password14' },
  ];

  const userLabels = ['Первый пользователь', 'Второй пользователь', 'Третий пользователь'];

  useEffect(() => {
    if (auth) {
      navigate('/catalogue');
    }
  }, [auth, navigate]);


  return (
    <>
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
            <AuthForm onSubmit={onSubmit} />
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
                  Логин: {profile.username}
                </Typography>
                <Typography variant="body2" color="#014361">
                  Пароль: {profile.password}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default AuthPage;
