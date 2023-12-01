import { FormWrapper } from "./FormWrapper";

type UserData = {
    BIRTHDATE: string,
    DEATHDATE: string,
    SSN: string,
    DRIVERS: string,
    PASSPORT: string,
    HEALTHCARE_EXPENSES: string,
    HEALTHCARE_COVERAGE: string
}
  
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function AddForm({
    BIRTHDATE, 
    DEATHDATE, 
    SSN, 
    DRIVERS, 
    PASSPORT, 
    HEALTHCARE_EXPENSES, 
    HEALTHCARE_COVERAGE, 
    updateFields}: UserFormProps) {
    return (
        <FormWrapper title="Additional">
          <label>Birth Date</label>
          <input autoFocus required type="text" value={BIRTHDATE} onChange={e => updateFields({ BIRTHDATE: e.target.value })} />
          <label>Death Date</label>
          <input type="text" value={DEATHDATE} onChange={e => updateFields({ DEATHDATE: e.target.value })} />
          <label>SSN</label>
          <input min={1} type="number" value={SSN} onChange={e => updateFields({ SSN: e.target.value })} />
          <label>Drivers License</label>
          <input min={1} type="number" value={DRIVERS} onChange={e => updateFields({ DRIVERS: e.target.value })} />
          <label>Passport Id</label>
          <input min={1} type="number" value={PASSPORT} onChange={e => updateFields({ PASSPORT: e.target.value })} />
          <label>Healthcare Expenses</label>
          <input min={1} type="number" value={HEALTHCARE_EXPENSES} onChange={e => updateFields({ HEALTHCARE_EXPENSES: e.target.value })} />
          <label>Healthcare Coverage</label>
          <input min={1} type="number" value={HEALTHCARE_COVERAGE} onChange={e => updateFields({ HEALTHCARE_COVERAGE: e.target.value })} />
        </FormWrapper>
    )
}