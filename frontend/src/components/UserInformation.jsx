import InputField from './InputField';

const UserInformation = () => {
  return (
    <>
      <InputField name='userName' type='text' placeholder='Pedro' content='Nombre' id='userName' labelFor='userName' />

      <InputField name='firstName' type='text' placeholder='Díaz' content='Apellido' id='firstName' labelFor='firstName' />

      <InputField name='email' type='email' placeholder='example@gmail.com' content='Correo' id='email' labelFor='email' />
    </>
  );
}

export default UserInformation;
