import React, { useState, useContext, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { AccountsMapContext, PatientData } from './AccountsMapContext';

// TODO: what happens if username already exists?

const CreateAccount: React.FC = () => {
  const context = useContext(AccountsMapContext);

  if (!context) {
    throw new Error('CreateAccount must be used within an AccountsMapContext.Provider');
  }
  
  const { accountsMap, setAccountsMap } = context;

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  useEffect(() => {
    const mapArray = Array.from(accountsMap.entries());
    localStorage.setItem('accountsMap', JSON.stringify(mapArray));
  }, [accountsMap]);

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
        // Add the username, password, and empty patient data to map
        const patientsData:PatientData[] = []
        setAccountsMap(new Map(accountsMap.set(username, [password, patientsData])));

        navigate('/');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="create-account-header">
        <h1>Enter New Account Information</h1>
      </div>
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

        <button type="submit">Create Account</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateAccount;