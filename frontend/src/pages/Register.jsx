import { Button } from '../components/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserInformation from '../components/UserInformation'
import Validation from '../components/Validation'
import PersonalInfo from '../components/PersonalInfo'
import { useUserContext } from '../context/UserContext'

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
          navigate('/home')
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
      <h1 className="text-3xl font-bold font-inter text-center text-gray-700 mb-4">
        Registrate
      </h1>
      <h3 className="font-inter text-lg text-center text-gray-500 mb-[4.5rem]">
        {formTitles[page]}
      </h3>

      <section className="w-full flex justify-center">
        <form className="w-5/6 flex flex-col gap-8">
          {pageLoaded()}

          <div className="flex gap-4 justify-center">
            <Button
              func={(e) => {
                e.preventDefault()
                managePaging('prev')
              }}
              disabled={page === 0 && true}
              type="button"
              nameClass="text-center mt-12 px-10 py-2 rounded-full bg-[#348AD0] text-white font-semibold tracking-wider cursor-pointer disabled:opacity-40"
            >
              Anterior
            </Button>

            <Button
              func={(e) => {
                e.preventDefault()
                validateRegister(page)
              }}
              type="button"
              nameClass="text-center mt-12 px-10 py-2 rounded-full  bg-[#348AD0] text-white font-semibold tracking-wider cursor-pointer disabled:opacity-40"
            >
              {page === formTitles.length - 1 ? 'Registrarse' : 'Siguiente'}
            </Button>
          </div>
        </form>
      </section>
    </main>
  )
}
