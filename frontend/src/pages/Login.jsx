import { useEffect, useState } from 'react'
import slider from '../assets/images/login-slider.svg'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Button } from '../components/Button'
import InputField from '../components/InputField'
import { useUserContext } from '../context/UserContext'
import { useNavigate } from 'react-router'


export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [validateForm, setValidateForm] = useState({});

  const navigate = useNavigate()
  const { login } = useUserContext();

  const handleChange = (e) => {
    setValidateForm({
        ...validateForm,
        [e.target.name]: e.target.value,
      }
    )
  }

  const validateUser = (e) =>{
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ 
        email: validateForm.email,
        password: validateForm.password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow'
    };
    
    fetch('https://pagaya.onrender.com/api/auth', requestOptions)
    .then(res => res.json())
    .then(data => {
      if(data.status === 'success'){
        login(data)
        navigate('/home')
      }
    })
    .catch(err => console.log('error', err))
  }

  return (
    <main className='w-full min-h-screen flex flex-col items-center gap-20'>

      <section className='mt-10'>
        <img src={slider} alt=''/>
      </section>
      
      <section className='w-full px-8'>
        <form className='w-full flex flex-col gap-6' onSubmit={validateUser}>
          <InputField id='email' type='email' name='email' placeholder='example@gmail.com' labelFor='email' content='Correo' func={handleChange}/>

          <InputField id='password' type={showPassword ? 'text' : 'password'} name='password' placeholder='********' labelFor='password' content='Contraseña' func={handleChange} setValue={setShowPassword} condition={showPassword} icon={showPassword ? <FaRegEyeSlash/> : <FaRegEye/>}/> 
          
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
