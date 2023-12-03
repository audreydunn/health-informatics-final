import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PatientPage: React.FC = () => {
  const location = useLocation();
  const patient = location.state?.patient;
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    window.location.reload();
  };

  const handleReturn = () => {
    navigate('/login');
  };

  return (
    <div>
      <div style={{position: "fixed", top: "0", right: "0"}}>
        <button style={{margin: "10px", backgroundColor: "#4CAF50"}} onClick={handleLogout}>Logout</button>
      </div>
      <div style={{position: "fixed", top: "0", left: "0"}}>
        <button style={{margin: "10px", backgroundColor: "#4CAF50"}} onClick={handleReturn}>Homepage</button>
      </div>
      <h1>Patient Information</h1>
      <p>Patient ID: {patient?.Id}</p>
      <p>Birth Date: {patient?.BIRTHDATE}</p>
      <p>Death Date: {patient?.DEATHDATE}</p>
      <p>SSN: {patient?.SSN}</p>
      <p>Drivers License: {patient?.DRIVERS}</p>
      <p>Passport Id: {patient?.PASSPORT}</p>
      <p>Prefix: {patient?.PREFIX}</p>
      <p>Suffix: {patient?.SUFFIX}</p>
      <p>First Name: {patient?.FIRST}</p>
      <p>Last Name: {patient?.LAST}</p>
      <p>Maiden Name: {patient?.MAIDEN}</p>
      <p>Marital Status: {patient?.MARITAL}</p>
      <p>Race: {patient?.RACE}</p>
      <p>Ethnicity: {patient?.ETHNICITY}</p>
      <p>Gender: {patient?.GENDER}</p>
      <p>Birthplace: {patient?.BIRTHPLACE}</p>
      <p>Address: {patient?.ADDRESS}</p>
      <p>City: {patient?.CITY}</p>
      <p>State: {patient?.STATE}</p>
      <p>County: {patient?.COUNTY}</p>
      <p>Zipcode: {patient?.ZIP}</p>
      <p>Latitude: {patient?.LAT}</p>
      <p>Longitude: {patient?.LON}</p>
      <p>Healthcare Expenses: {patient?.HEALTHCARE_EXPENSES}</p>
      <p>Healthcare Coverage: {patient?.HEALTHCARE_COVERAGE}</p>
    </div>
  );
};

export default PatientPage;