import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';
import useAuth from '../hooks/useAuth';
import { useAuthContext } from '../context/AuthContext';

const AuthPage = () => {
  const navigate = useNavigate();
  const { authenticate, loading, error } = useAuth();
  const { login, auth } = useAuthContext();

  console.log(auth, 'auth');

  const onSubmit = async (formData) => {
    const authData = await authenticate(formData);
    if (authData) {
      console.log(authData, 'data for auth');
      login(authData.token);
      navigate('/catalogue');
    }
  };

  useEffect(() => {
    if (auth) {
      navigate('/catalogue');
    }
  }, [auth, navigate]);

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <AuthForm onSubmit={onSubmit} />
      {loading && <p>Авторизация...</p>}
    </>
  );
};

export default AuthPage;
