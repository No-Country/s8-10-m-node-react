import InputField from './InputField';

const Validation = () => {
  return (
    <>
      <InputField name='phone' type='tel' placeholder='+54 xxx xxxx' content='Teléfono' id='phone' labelFor='phone' />
          
      <InputField name='password' type='password' placeholder='********' content='Contraseña' id='password' labelFor='password' />
          
      <InputField name='confirmPassword' type='password' placeholder='********' content='Confirmar Contraseña' id='confirmPassword' labelFor='confirmPassword' />
    </>
  );
}

export default Validation;
