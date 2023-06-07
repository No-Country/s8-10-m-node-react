import { Button } from '../components/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserInformation from '../components/UserInformation'
import Validation from '../components/Validation'
import PersonalInfo from '../components/PersonalInfo'
import { useUserContext } from '../context/UserContext'
import logo from '../assets/images/Logo.svg'
import { IoArrowBack } from 'react-icons/io5'

export const Register = () => {
  const [page, setPage] = useState(0)
  const [error, setError] = useState({
    userName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    dni: '',
  })
  const [formData, setFormData] = useState({
    userName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    dni: '',
    country: '',
    address: '',
  })

  const navigate = useNavigate()
  const { login } = useUserContext()

  const formTitles = [
    'Información del Usuario',
    'Validación',
    'Información Personal',
  ]

  const submitForm = () => {
    const raw = JSON.stringify({
      fullName: formData.userName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      address: formData.address,
      dni: formData.dni,
      country: formData.country,
    })

    const requestOptions = {
      method: 'POST',
      body: raw,
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
    }

    fetch('https://pagaya.onrender.com/api/user', requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          login(data.response)
          navigate('/login')
        }
      })
      .catch((error) => console.log('error', error))
      .finally(() => console.log('finally'))
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const managePaging = (newPage) => {
    if (newPage === 'next' && page < formTitles.length - 1) {
      setPage(page + 1)
    } else if (newPage === 'prev' && page > 0) {
      setPage(page - 1)
    }
  }

  const pageLoaded = () => {
    switch (page) {
      case 0:
        return (
          <UserInformation
            formData={formData}
            handleChange={handleChange}
            error={error}
          />
        )
      case 1:
        return (
          <Validation
            formData={formData}
            handleChange={handleChange}
            error={error}
          />
        )
      case 2:
        return (
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            error={error}
          />
        )
      default:
        return (
          <UserInformation
            formData={formData}
            handleChange={handleChange}
            error={error}
          />
        )
    }
  }

  const validateRegister = (page) => {
    let newError = { ...error }
    switch (page) {
      case 0:
        if (formData.userName === '') {
          newError.userName = 'Debe ingresar un nombre'
        } else {
          delete newError.userName
        }
        if (formData.lastName === '') {
          newError.lastName = 'Debe ingresar un apellido'
        } else {
          delete newError.lastName
        }
        if (formData.email === '') {
          newError.email = 'Debe ingresar un email'
        } else {
          delete newError.email
        }
        if (
          formData.userName !== '' &&
          formData.lastName !== '' &&
          formData.email !== ''
        ) {
          managePaging('next')
        }
        setError(newError)
        break
      case 1:
        if (formData.phone === '') {
          newError.phone = 'Debe ingresar un teléfono'
        } else {
          delete newError.phone
        }
        if (formData.password === '') {
          newError.password = 'Debe ingresar una contraseña'
        } else {
          delete newError.password
        }
        if (
          JSON.stringify(formData.confirmPassword.trim()) !==
          JSON.stringify(formData.password.trim())
        ) {
          newError.confirmPassword = 'Las contraseñas no coinciden'
        } else {
          delete newError.confirmPassword
        }
        if (
          formData.phone !== '' &&
          formData.password !== '' &&
          formData.confirmPassword !== '' &&
          JSON.stringify(formData.confirmPassword.trim()) ===
            JSON.stringify(formData.password.trim())
        ) {
          managePaging('next')
        }
        setError(newError)
        break
      case 2:
        if (formData.dni === '') {
          newError.dni = 'Debe ingresar su dni'
        } else {
          delete newError.dni
          submitForm()
        }
        setError(newError)
        break
      default:
        break
    }
  }
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center">
      <img
        className="w-[300px] h-[160px]"
        src={logo}
        alt="logotipo de domino"
      />
      <h1 className="text-2xl font-medium font-roboto text-center mt-7 mb-4">
        Registro
      </h1>
      <h3 className="font-roboto text-md text-center text-gray-500 mb-4">
        {formTitles[page]}
      </h3>

      <section className="w-full flex justify-center px-8 mt-8">
        <form className="w-full  flex flex-col items-center gap-8 min-[450px]:px-8">
          {pageLoaded()}
        </form>
      </section>
      <section className="w-full flex flex-col items-center max-w-screen-sm px-5">
        <h3 className="text-center mt-7 font-roboto tracking-wide">
          <span className="text-[#EB554E] text-md">*</span>
          Todos los campos con asterisco son obligatorios
        </h3>
        <div className="w-full  h-auto flex items-center gap-5 justify-center md:justify-between mt-9">
          <div className="flex gap-6 items-center">
            {page >= 1 && (
              <IoArrowBack
                className="cursor-pointer"
                size={20}
                onClick={() => {
                  managePaging('prev')
                }}
              />
            )}
            <p className="font-roboto">
              Paso {page + 1} de {formTitles.length}
            </p>
          </div>
          <Button
            func={(e) => {
              e.preventDefault()
              validateRegister(page)
            }}
            type="button"
            nameClass="text-center w-36 md:w-72 md:transition-[width] md:duration-500 h-12 py-2 rounded-full  bg-[#4C27AE] text-white font-medium font-roboto tracking-wider cursor-pointer disabled:opacity-40"
          >
            {page === formTitles.length - 1 ? 'Registrarse' : 'Continuar'}
          </Button>
        </div>
      </section>
    </main>
  )
}
