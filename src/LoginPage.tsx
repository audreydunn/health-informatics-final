import React from 'react';
import LoginForm from './LoginForm';
import './Login.css';

interface LoginPageProps {
    onLogin: (username: string, password: string) => void;
  }
  
const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div className="login-container">
      <h1>Healthcare Provider Login</h1>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;