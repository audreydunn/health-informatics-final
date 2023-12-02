import React, { useState, useContext, useEffect } from 'react';
//import data from './data/patients.json';
import {Link, useNavigate} from 'react-router-dom';
import './PatientsList.css';
import { AccountsMapContext, PatientData } from './AccountsMapContext';

//const patientArray:PatientData[] = data as PatientData[];

function calculateAge(birthdate: string): number {
  const [year, month, day] = birthdate.split('-').map(Number);
  const birthDate = new Date(year, month - 1, day);

  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  const isBirthdayPastThisYear =
    currentDate.getMonth() > birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());

  if (!isBirthdayPastThisYear) {
    age -= 1;
  }

  return age;
}

const PatientsList: React.FC = () => {
  const context = useContext(AccountsMapContext);

  if (!context) {
    throw new Error('PatientsList must be used within an AccountsMapContext.Provider');
  }
  
  const { accountsMap, loggedAccount } = context;

  const navigate = useNavigate();

  const handleAddNewPatient = () => {
    //alert('Add New Patient button clicked');
    navigate('/cs6440-final-project/add-patient');
  };

  const handleLogout = () => {
    navigate('/cs6440-final-project/');
    window.location.reload();
  };

  const accountInfo = accountsMap.get(loggedAccount);
  const [patientArray, setPatientArray] = useState<PatientData[]>([]);

  useEffect(() => {
    if (accountInfo) {
      setPatientArray(accountInfo[1])
    }
  }, []);

  return (
    <div className="patient-list-container">
      <div className="Homepage">
        <header className="Homepage-header">
          <h3>Welcome {loggedAccount}</h3>
          <h1>Healthcare Provider Homepage</h1>
        </header>
      </div>
      <h3>List of Patients</h3>
      <div className="patient-list">
        {patientArray.map((patient) => (
          <div key={patient.Id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
            <Link to={`/cs6440-final-project/patient`} state={{ patient }} style={{ width: '100%', textAlign: 'left', display: 'block', padding: '5px' }}>
                 <p>Patient Name: {patient.FIRST.concat(" ", patient.LAST)}</p>
                 <p>Age: {calculateAge(patient.BIRTHDATE)}</p>
                 <p>Gender: {patient.GENDER}</p>
            </Link>
          </div>
        ))}
      </div>
      <button onClick={handleAddNewPatient} style={{ marginTop: '10px' }}>
        Add New Patient
      </button>
      <div style={{position: "fixed", top: "0", right: "0"}}>
        <button style={{margin: "10px", backgroundColor: "#4CAF50"}} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default PatientsList;