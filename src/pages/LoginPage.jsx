import React from 'react';
import useUserData from '../store/store';
import AuthForm from '../components/AuthForm.jsx';

const LoginPage = () => {
  const userData = useUserData((state) => state.userData);
  const fetchUserData = useUserData((state) => state.fetchUserData);
  let data = fetchUserData();
  console.log(data);

  return (
    <div>
      LoginPage
      <AuthForm />
    </div>
  );
};
export default LoginPage;
