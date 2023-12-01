import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const validateForm = () => {
    let valid = true;
    const newErrors: { username?: string; password?: string } = {};

    if (!username) {
      valid = false;
      newErrors.username = 'Username is required';
    }

    if (!password) {
      valid = false;
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      onSubmit(username, password);
    }
  };

  const handleCreateAccount = () => {
    // Route to the "create new account" page
    navigate('/cs6440-final-project/create-account');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-form">
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <div className="error-message">{errors.username}</div>}
        
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="error-message">{errors.password}</div>}
        
        <button type="submit">Login</button>
        <button type="button" onClick={handleCreateAccount}>
          Create New Account
        </button>
      </div>
    </form>
  );
};

export default LoginForm;