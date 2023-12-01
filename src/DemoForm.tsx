import { FormWrapper } from "./FormWrapper";

type UserData = {
  FIRST: string,
  LAST: string,
  MAIDEN: string,
  MARITAL: string,
  RACE: string,
  ETHNICITY: string,
  GENDER: string,
  PREFIX: string,
  SUFFIX: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function DemoForm({
  FIRST, 
  LAST, 
  MAIDEN, 
  MARITAL, 
  RACE, 
  ETHNICITY, 
  GENDER, 
  PREFIX, 
  SUFFIX, 
  updateFields}: UserFormProps) {
    return (
        <FormWrapper title="Demographics">
          <label>First Name</label>
          <input autoFocus required type="text" value={FIRST} onChange={e => updateFields({ FIRST: e.target.value })} />
          <label>Last Name</label>
          <input required type="text" value={LAST} onChange={e => updateFields({ LAST: e.target.value })}  />
          <label>Maiden Name</label>
          <input required type="text" value={MAIDEN} onChange={e => updateFields({ MAIDEN: e.target.value })}  />
          <label>Marital Status</label>
          <input required type="text" value={MARITAL} onChange={e => updateFields({ MARITAL: e.target.value })}  />
          <label>Race</label>
          <input required type="text" value={RACE} onChange={e => updateFields({ RACE: e.target.value })}  />
          <label>Ethnicity</label>
          <input required type="text" value={ETHNICITY} onChange={e => updateFields({ ETHNICITY: e.target.value })} />
          <label>Gender</label>
          <input required type="text" value={GENDER} onChange={e => updateFields({ GENDER: e.target.value })}  />
          <label>Prefix</label>
          <input type="text" value={PREFIX} onChange={e => updateFields({ PREFIX: e.target.value })}  />
          <label>Suffix</label>
          <input type="text" value={SUFFIX} onChange={e => updateFields({ SUFFIX: e.target.value })} />
        </FormWrapper>
    )
}