import { FormWrapper } from "./FormWrapper";

type UserData = {
    BIRTHPLACE: string,
    ADDRESS: string,
    CITY: string,
    STATE: string,
    COUNTY: string,
    ZIP: string,
    LAT: string,
    LON: string
}
  
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function LocForm({
    BIRTHPLACE, 
    ADDRESS, 
    CITY, 
    STATE, 
    COUNTY, 
    ZIP, 
    LAT, 
    LON, 
    updateFields}: UserFormProps) {
    return (
        <FormWrapper title="Location">
          <label>Birthplace</label>
          <input autoFocus required type="text" value={BIRTHPLACE} onChange={e => updateFields({ BIRTHPLACE: e.target.value })} />
          <label>Address</label>
          <input required type="text" value={ADDRESS} onChange={e => updateFields({ ADDRESS: e.target.value })} />
          <label>City</label>
          <input required type="text" value={CITY} onChange={e => updateFields({ CITY: e.target.value })} />
          <label>State</label>
          <input required type="text" value={STATE} onChange={e => updateFields({ STATE: e.target.value })} />
          <label>County</label>
          <input required type="text" value={COUNTY} onChange={e => updateFields({ COUNTY: e.target.value })} />
          <label>Zipcode</label>
          <input required min={1} type="number" value={ZIP} onChange={e => updateFields({ ZIP: e.target.value })} />
          <label>Latitude</label>
          <input min={1} type="number" value={LAT} onChange={e => updateFields({ LAT: e.target.value })} />
          <label>Longitude</label>
          <input min={1} type="number" value={LON} onChange={e => updateFields({ LON: e.target.value })}/>
        </FormWrapper>
    )
}