import { useState } from 'react'
import logo from '../assets/images/Logo.svg'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Button } from '../components/Button'
import InputField from '../components/InputField'
import { useUserContext } from '../context/UserContext'
import { Link, redirect } from 'react-router-dom'

export function loader () {
  const loggedUserJSON = window.sessionStorage.getItem('dominoUser')
  if (loggedUserJSON) {
    return redirect('/user/home')
  } else {
    return null
  }
}

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [validateForm, setValidateForm] = useState({})

  const { login } = useUserContext()

  const handleChange = (e) => {
    setValidateForm({
      ...validateForm,
      [e.target.name]: e.target.value,
    })
  }

  const validateUser = async (e) => {
    e.preventDefault()
    await login(validateForm)
  }

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center gap-8">
      <section className="">
        <img
          className="w-[300px] h-[135px]"
          src={logo}
          alt="logotipo de domino"
        />
      </section>
      <section className="w-full px-8">
        <h3 className="text-center font-roboto text-md mb-6 text-[#3E3F3F] tracking-wider">
          Inicia sesión para acceder
        </h3>
        <form
          className="w-full flex items-center flex-col gap-6 min-[450px]:px-5"
          onSubmit={validateUser}
        >
          <InputField
            id="email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            labelFor="email"
            content="Correo"
            func={handleChange}
          />
          <InputField
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="********"
            labelFor="password"
            content="Contraseña"
            func={handleChange}
            setValue={setShowPassword}
            condition={showPassword}
            icon={
              showPassword ? (
                <FaRegEyeSlash size={20} className="text-[#4C27AE]" />
              ) : (
                <FaRegEye size={20} className="text-[#4C27AE]" />
              )
            }
          />

          <div className="w-[108%] flex items-center flex-col gap-6">
            <Button
              type="submit"
              nameClass="w-full max-w-screen-sm bg-[#4C27AE] py-3 rounded-lg text-md text-white font-light font-roboto tracking-wider cursor-pointer "
            >
              Iniciar sesión
            </Button>
          </div>
        </form>
      </section>
      <div className="w-full flex items-center justify-center gap-3">
        <span className="w-[40%] max-w-[300px] border-t-2 border-[#4C27AE] blur-[.5px] rounded-full"></span>
        <span className="font-bold font-roboto text-[#4C27AE] text-lg">O</span>
        <span className="w-[40%] max-w-[300px] border-t-2 border-[#4C27AE] blur-[.5px] rounded-full"></span>
      </div>
      <section className="flex flex-col items-center gap-4">
        <p className="text-md  font-roboto text-center font-medium text-black">
          No tienes una cuenta?{' '}
          <Link
            to="/register"
            className="cursor-pointer font-normal text-[#4C27AE]"
          >
            Regístrate aquí
          </Link>
        </p>
        <p className="text-[15px] text-center cursor-pointer font-roboto">
          ¿Has olvidado tu contraseña?
        </p>
      </section>
    </main>
  )
}
