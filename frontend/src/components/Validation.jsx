import InputField from './InputField'

const Validation = ({ formData, handleChange, error }) => {
  return (
    <>
      <InputField
        name="phone"
        type="tel"
        placeholder="+54 xxx xxxx"
        content="Teléfono*"
        id="phone"
        labelFor="phone"
        func={handleChange}
        inputValue={formData.phone}
      />

      <InputField
        name="password"
        type="password"
        placeholder="********"
        content="Contraseña*"
        id="password"
        labelFor="password"
        func={handleChange}
        inputValue={formData.password}
      />

      <InputField
        name="confirmPassword"
        type="password"
        placeholder="********"
        content="Confirmar Contraseña*"
        id="confirmPassword"
        labelFor="confirmPassword"
        func={handleChange}
        inputValue={formData.confirmPassword}
      />
    </>
  )
}

export default Validation
