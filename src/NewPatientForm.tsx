import React, { FormEvent, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNewPatientForm } from './useNewPatientForm';
import { DemoForm } from './DemoForm';
import { LocForm } from './LocForm';
import { AddForm } from './AddForm';
import { AccountsMapContext, PatientData } from './AccountsMapContext';

const INITIAL_DATA: PatientData = {
  Id: "",
  BIRTHDATE: "",
  DEATHDATE: "",
  SSN: "",
  DRIVERS: "",
  PASSPORT: "",
  PREFIX: "",
  FIRST: "",
  LAST: "",
  SUFFIX: "",
  MAIDEN: "",
  MARITAL: "",
  RACE: "",
  ETHNICITY: "",
  GENDER: "",
  BIRTHPLACE: "",
  ADDRESS: "",
  CITY: "",
  STATE: "",
  COUNTY: "",
  ZIP: "",
  LAT: "",
  LON: "",
  HEALTHCARE_EXPENSES: "",
  HEALTHCARE_COVERAGE: "",
}

const NewPatientForm: React.FC = () => {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<PatientData>) {
    setData(prev => {
        return {...prev, ...fields}
    })
  }
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next
  } = useNewPatientForm([
    <DemoForm {...data} updateFields={updateFields} />,
    <LocForm {...data} updateFields={updateFields} />,
    <AddForm {...data} updateFields={updateFields} />
  ]);

  const context = useContext(AccountsMapContext);

  if (!context) {
    throw new Error('PatientsList must be used within an AccountsMapContext.Provider');
  }
  
  const { accountsMap, loggedAccount } = context;

  const navigate = useNavigate();
  const accountInfo = accountsMap.get(loggedAccount);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next()
    //alert("Successful Account Creation")

    if (accountInfo) {
      accountInfo[1].push(data);
    }

    navigate('/login');
  }

  return (
    <div style={{
        position: "relative",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
    }}>
      <form onSubmit={onSubmit}>
        <div style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem"
        }}>
            {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div style={{marginTop:"1rem", display:"flex", gap:".5rem", justifyContent:"flex-end"}}>
            {!isFirstStep && <button type="button" onClick={back}>Back</button>}
            <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
};

export default NewPatientForm;