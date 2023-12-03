import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import PatientPage from './PatientPage';
import CreateAccount from './CreateAccount';
import { AccountsMapContext, PatientData } from './AccountsMapContext';
import PatientsList from './PatientsList';
import NewPatientForm from './NewPatientForm';

import data1 from './data/part_1.json';
import data2 from './data/part_2.json';
import data3 from './data/part_3.json';
import data4 from './data/part_4.json';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loggedAccount, setLoggedAccount] = useState('');

  const patientsData1:PatientData[] = data1 as PatientData[];
  const patientsData2:PatientData[] = data2 as PatientData[];
  const patientsData3:PatientData[] = data3 as PatientData[];
  const patientsData4:PatientData[] = data4 as PatientData[];

  const [accountsMap, setAccountsMap] = React.useState<Map<string, [string, PatientData[]]>>(() => {
    // Get the stored map from local storage and parse it
    const storedMap = localStorage.getItem('accountsMap');
    if (storedMap) {
      return new Map(JSON.parse(storedMap))
    }

    return new Map<string, [string, PatientData[]]>().set("provider1", ["password1", patientsData1]).set("provider2", ["password2", patientsData2]).set("provider3", ["password3", patientsData3]).set("provider4", ["password4", patientsData4])
    
    //return storedMap ? new Map(JSON.parse(storedMap)) : new Map<string, [string, PatientData[]]>();
  });

  useEffect(() => {
    const mapArray = Array.from(accountsMap.entries());
    localStorage.setItem('accountsMap', JSON.stringify(mapArray));
  }, [accountsMap]);

  const handleLogin = (username: string, password: string) => {
    //console.log(Array.from(accountsMap.entries()));

    if ( accountsMap.has(username) ) {
      const accountInfo = accountsMap.get(username);

      if (accountInfo) {
        const [storedPassword] = accountInfo;

        if (storedPassword === password) {
          setLoggedAccount(username);
          setIsAuthenticated(true);
        }
      }

    }

  };

  return (
    <AccountsMapContext.Provider value={{ accountsMap, setAccountsMap, loggedAccount }}>
      <Router>
        <Routes>
          <Route path='/add-patient' element={isAuthenticated ? <NewPatientForm /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path='/patient' element={isAuthenticated ? <PatientPage /> : <LoginPage onLogin={handleLogin} />} />
          <Route path='/login' element={isAuthenticated ? <PatientsList /> : <LoginPage onLogin={handleLogin} />} />
          <Route path='/' element={isAuthenticated ? <PatientsList /> : <LoginPage onLogin={handleLogin} />} />
        </Routes>
      </Router>
    </AccountsMapContext.Provider>
  );

};

export default App;
