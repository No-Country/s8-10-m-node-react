import { useState } from 'react'
import { Button } from '../components/Button'
import InputField from '../components/InputField'
import { ProfileImage } from '../components/ProfileImage'
import { useUserContext } from '../context/UserContext'

export const Profile = () => {
  const [validateForm, setValidateForm] = useState({
    name: '',
    lastname: '',
    email: '',
    country: '',
    address: '',
    phone: '',
  })
  const [showAspects, setShowAspects] = useState(false)
  const { user } = useUserContext()
  const nameUser = `${user?.payload?.profile?.fullName} ${user?.payload?.profile?.lastName}`
  const handleChange = (e) => {
    setValidateForm({
      ...validateForm,
      [e.target.name]: e.target.value,
    })
  }

  const validateUser = async (e) => {
    e.preventDefault()
  }
  return (
    <main className="w-full  font-roboto flex flex-col items-center gap-20">
      <section className="mt-10 flex">
        <ProfileImage name={nameUser} />
      </section>

      <section className="w-full flex px-8 flex-col items-center sm:flex-col sm:justify-center">
        <div className="flex text-center gap-12 mb-5">
          <p
            className={` w-24 pb-5 ${
              !showAspects &&
              'border-b transition-all duration-700 border-customColor'
            } cursor-pointer `}
            onClick={() => setShowAspects(false)}
          >
            Usuario
          </p>
          <p
            className={` w-24 pb-5 ${
              showAspects &&
              'border-b transition-all duration-700 border-customColor'
            } cursor-pointer `}
            onClick={() => setShowAspects(true)}
          >
            Aspectos
          </p>
        </div>
        <form
          className="w-full flex  gap-6 flex-col items-center sm:flex-col sm:justify-center"
          onSubmit={validateUser}
        >
          {!showAspects ? (
            <>
              <InputField
                id="name"
                type="text"
                name="name"
                placeholder={user?.payload?.profile?.fullName}
                inputValue={validateForm.name}
                labelFor="name"
                content="Name"
                func={handleChange}
              />
              <InputField
                id="lastname"
                type="text"
                name="lastname"
                placeholder={user?.payload?.profile?.lastName}
                inputValue={validateForm.lastname}
                labelFor="Apellido"
                content="Apellido"
                func={handleChange}
              />
              <InputField
                id="email"
                type="email"
                name="email"
                placeholder={user?.payload?.profile?.email}
                inputValue={validateForm.email}
                labelFor="email"
                content="Correo"
                func={handleChange}
              />
            </>
          ) : (
            <>
              <InputField
                id="country"
                type="text"
                name="country"
                placeholder={user?.payload?.profile?.country}
                inputValue={validateForm.country}
                labelFor="country"
                content="País"
                func={handleChange}
              />
              <InputField
                id="address"
                type="text"
                name="address"
                placeholder={user?.payload?.profile?.address}
                inputValue={validateForm.address}
                labelFor="address"
                content="Dirección"
                func={handleChange}
              />
              <InputField
                id="phone"
                type="number"
                name="phone"
                placeholder={user?.payload?.profile?.phone}
                setValue={validateForm.phone}
                labelFor="phone"
                content="Teléfono"
                func={handleChange}
              />
            </>
          )}

          <div className="flex w-2/4 justify-center gap-4 mt-8">
            <Button
              type="submit"
              nameClass="bg-customColor w-44 md:w-96 py-3 rounded-full text-white font-semibold tracking-wide"
            >
              Guardar Cambios
            </Button>
          </div>
        </form>
      </section>
    </main>
  )
}
