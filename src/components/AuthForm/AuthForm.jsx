import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const AuthForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Состояние для отображения/скрытия пароля
  const [showPassword, setShowPassword] = useState(false);

  // Функция переключения видимости пароля
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
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

      {/* Поле для логина */}
      <TextField
        label="Логин"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        placeholder="Введите e-mail"
        {...register('login', { required: 'Введите корректный e-mail адрес',
        pattern: {
          value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
          message: 'Введите корректный e-mail'
        } 
       })} // Изменено на 'login'
        error={!!errors.login} // Изменено на 'login'
        helperText={errors.login ? errors.login.message : ''} // Изменено на 'login'
        fullWidth
      />

      {/* Поле для пароля с кнопкой "глазок" */}
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

      {/* Кнопка входа */}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Войти
      </Button>
    </Box>
  );
};

export default AuthForm;
