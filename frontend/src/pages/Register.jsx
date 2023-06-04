import InputField from "../components/InputField";
import { Button } from '../components/Button'

export const Register = () => {

  const submitForm = (e) =>{
    e.preventDefault()
  }

  return (
    <main className='w-full min-h-screen flex flex-col justify-center items-center gap-20'>
      <h1 className='text-3xl font-bold text-center text-gray-700 '>Registrate</h1>
      <section className='w-4/5'>
        <form className='flex flex-col gap-8 ' onSubmit={submitForm}>
          <InputField name='userName' type='text' placeholder='Matias' content='Nombre' id='userName' labelFor='userName' />

          <InputField name='firstName' type='text' placeholder='Teijeiro' content='Apellido' id='firstName' labelFor='firstName' />
          
          <InputField name='email' type='email' placeholder='example@gmail.com' content='Correo' id='email' labelFor='email' />
          
          <InputField name='password' type='password' placeholder='********' content='Contraseña' id='password' labelFor='password' />
          
          <InputField name='phone' type='tel' placeholder='092 xxx xxx' content='Teléfono' id='phone' labelFor='phone' />
          
          {/* Input Select for country 
          
          <InputField name='userName' type='text' placeholder='Nombre' content='Nombre' id='userName' labelFor='userName' /> */} 
          
          <InputField name='dni' type='number' placeholder='5320xxxx' content='DNI' id='dni' labelFor='dni' />

          <Button nameClass='text-center mt-12 px-10 py-2 rounded-full self-center bg-[#348AD0] text-white font-semibold tracking-wider cursor-pointer'>Registrarse</Button>
        </form>
      </section>
    </main>
  )
}
