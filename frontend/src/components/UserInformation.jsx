import InputField from './InputField'

const UserInformation = ({ formData, handleChange, error }) => {
  return (
    <>
      <InputField
        name="userName"
        type="text"
        placeholder="Pedro"
        content="Nombre*"
        id="userName"
        labelFor="userName"
        func={handleChange}
        inputValue={formData.userName}
      />

      <InputField
        name="lastName"
        type="text"
        placeholder="Díaz"
        content="Apellido*"
        id="lastName"
        labelFor="lastName"
        func={handleChange}
        inputValue={formData.lastName}
      />

      <InputField
        name="email"
        type="email"
        placeholder="example@gmail.com"
        content="Correo*"
        id="email"
        labelFor="email"
        func={handleChange}
        inputValue={formData.email}
      />
    </>
  )
}

export default UserInformation
