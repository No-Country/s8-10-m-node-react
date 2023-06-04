import InputField from './InputField'

const PersonalInfo = ({ formData, handleChange, error }) => {
  return (
    <>
      <InputField
        name="dni"
        type="number"
        placeholder="532xxxxx"
        content="DNI*"
        id="dni"
        labelFor="dni"
        func={handleChange}
        inputValue={formData.dni}
      />

      <select
        name="country"
        className="py-3 px-2 border-2 border-gray-400 rounded-lg w-full "
        placeholder="Country"
        id="country"
        onChange={handleChange}
        value={formData.country}
      >
        <option value="" hidden>
          Elige un país
        </option>
        <option value="Argentina">Argentina</option>
        <option value="Colombia">Colombia</option>
        <option value="Uruguay">Uruguay</option>
      </select>

      <InputField
        name="address"
        type="text"
        placeholder="Calle xxxxx"
        content="Dirección"
        id="address"
        labelFor="address"
        func={handleChange}
        inputValue={formData.address}
      />
    </>
  )
}

export default PersonalInfo
