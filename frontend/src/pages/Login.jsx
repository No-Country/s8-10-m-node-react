import slider from '../assets/images/login-slider.svg'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import {Button } from '../components/Button'
import { useState } from 'react'
import InputField from '../components/InputField'

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const submitForm = (e) => {
    e.preventDefault()
  }

  return (
    <main className='w-full min-h-screen flex flex-col items-center gap-20'>
      <section className='mt-10'>
        <img src={slider} alt=''/>
      </section>
      <section className='w-full px-8'>
        <form className='w-full flex flex-col gap-6' onSubmit={submitForm}>
          <InputField id='userLogin' type='text' name='userLogin' placeholder='0704 xxx' labelFor='userLogin' content='Teléfono o Correo'/>

          <InputField id='password' type={showPassword ? 'text' : 'password'} name='password' placeholder='********' labelFor='password' content='Contraseña' setValue={setShowPassword} condition={showPassword} icon={showPassword ? <FaRegEyeSlash/> : <FaRegEye/>}/> 
          
          <div className='flex flex-col gap-6'>
           <Button type='submit' nameClass='bg-[#012340] mt-10 py-3 rounded-full text-white font-semibold tracking-wide'>Ingresar</Button>
            <p className='text-sm text-center text-[#012340] underline underline-offset-2'>
              ¿Olvidaste tu contraseña?
            </p>
          </div>
        </form>
      </section>
    </main>
  )
}