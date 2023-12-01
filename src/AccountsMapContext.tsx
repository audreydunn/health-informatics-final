import React from 'react';

export interface PatientData {
  Id: string;
  BIRTHDATE: string;
  DEATHDATE: string;
  SSN: string;
  DRIVERS: string;
  PASSPORT: string;
  PREFIX: string;
  FIRST: string;
  LAST: string;
  SUFFIX: string;
  MAIDEN: string;
  MARITAL: string;
  RACE: string;
  ETHNICITY: string;
  GENDER: string;
  BIRTHPLACE: string;
  ADDRESS: string;
  CITY: string;
  STATE: string;
  COUNTY: string;
  ZIP: string;
  LAT: string;
  LON: string;
  HEALTHCARE_EXPENSES: string;
  HEALTHCARE_COVERAGE: string;
}

interface AccountsMapContextProps {
  accountsMap: Map<string, [string, PatientData[]]>;
  setAccountsMap: React.Dispatch<React.SetStateAction<Map<string, [string, PatientData[]]>>>;
  loggedAccount: string;
}

export const AccountsMapContext = React.createContext<AccountsMapContextProps | undefined>(undefined);
