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

  const headers = [
    {label: "Category"},
    {label: "Data"}
  ];

  return (
    <div>
      <div style={{position: "fixed", top: "0", right: "0"}}>
        <button style={{margin: "10px", backgroundColor: "#4CAF50"}} onClick={handleLogout}>Logout</button>
      </div>
      <div style={{position: "fixed", top: "0", left: "0"}}>
        <button style={{margin: "10px", backgroundColor: "#4CAF50"}} onClick={handleReturn}>Homepage</button>
      </div>
      <div>
        <h1>Patient Information</h1>
        <table>
          <thead>
            <tr>
              {headers.map((row) => {return <th>{row.label}</th>})}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Patient ID</td>
              <td>{patient?.Id}</td>
            </tr>
            <tr>
              <td>Birth Date</td>
              <td>{patient?.BIRTHDATE}</td>
            </tr>
            <tr>
              <td>Death Date</td>
              <td>{patient?.DEATHDATE}</td>
            </tr>
            <tr>
              <td>SSN</td>
              <td>{patient?.SSN}</td>
            </tr>
            <tr>
              <td>Drivers License</td>
              <td>{patient?.DRIVERS}</td>
            </tr>
            <tr>
              <td>Passport Id</td>
              <td>{patient?.PASSPORT}</td>
            </tr>
            <tr>
              <td>Prefix</td>
              <td>{patient?.PREFIX}</td>
            </tr>
            <tr>
              <td>Suffix</td>
              <td>{patient?.SUFFIX}</td>
            </tr>
            <tr>
              <td>First Name</td>
              <td>{patient?.FIRST}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{patient?.LAST}</td>
            </tr>
            <tr>
              <td>Maiden Name</td>
              <td>{patient?.MAIDEN}</td>
            </tr>
            <tr>
              <td>Marital Status</td>
              <td>{patient?.MARITAL}</td>
            </tr>
            <tr>
              <td>Race</td>
              <td>{patient?.RACE}</td>
            </tr>
            <tr>
              <td>Ethnicity</td>
              <td>{patient?.ETHNICITY}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{patient?.GENDER}</td>
            </tr>
            <tr>
              <td>Birthplace</td>
              <td>{patient?.BIRTHPLACE}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{patient?.ADDRESS}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{patient?.CITY}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{patient?.STATE}</td>
            </tr>
            <tr>
              <td>County</td>
              <td>{patient?.COUNTY}</td>
            </tr>
            <tr>
              <td>Zipcode</td>
              <td>{patient?.ZIP}</td>
            </tr>
            <tr>
              <td>Latitude</td>
              <td>{patient?.LAT}</td>
            </tr>
            <tr>
              <td>Longitude</td>
              <td>{patient?.LON}</td>
            </tr>
            <tr>
              <td>Healthcare Expenses</td>
              <td>{patient?.HEALTHCARE_EXPENSES}</td>
            </tr>
            <tr>
              <td>Healthcare Coverage</td>
              <td>{patient?.HEALTHCARE_COVERAGE}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientPage;