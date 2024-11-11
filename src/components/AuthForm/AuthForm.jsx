import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const AuthForm = ({ testProfiles }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const { authenticate } = useAuth();
  const { login, auth } = useAuthContext();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFormSubmit = async (formData) => {
    const isTestProfile = testProfiles.some(
      (profile) => profile.login === formData.login && profile.password === formData.password,
    );

    if (!isTestProfile) {
      setError('login', { type: 'manual', message: 'Неверный логин или пароль' });
      setError('password', { type: 'manual', message: 'Неверный логин или пароль' });
      return;
    }

    const result = await authenticate(formData);
    if (result) {
      toast.success('Успешная авторизация!', { theme: 'colored', autoClose: 2000 }); // Уведомление об успешной авторизации
      login(result.token);
      navigate('/catalog');
    } else {
      toast.error('Ошибка! Попробуйте еще раз', { theme: 'colored', autoClose: 3000 }); // Уведомление об ошибке
    }
  };

  useEffect(() => {
    if (auth) {
      navigate('/catalog');
    }
  }, [auth, navigate]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: 400,
        margin: 'auto',
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'background.paper',
      }}
    >
      <Typography variant="h5" align="left" gutterBottom color="#212121">
        Вход
      </Typography>

      <TextField
        label="Логин"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        placeholder="Введите e-mail"
        {...register('login', {
          required: 'Введите корректный e-mail адрес',
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            message: 'Введите корректный e-mail',
          },
        })}
        error={!!errors.login}
        helperText={errors.login ? errors.login.message : ''}
        fullWidth
      />

      <TextField
        label="Пароль"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        placeholder="Введите пароль"
        type={showPassword ? 'text' : 'password'}
        {...register('password', { required: 'Введите корректный пароль' })}
        error={!!errors.password}
        helperText={errors.password ? errors.password.message : ''}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Войти
      </Button>
    </Box>
  );
};

export default AuthForm;
