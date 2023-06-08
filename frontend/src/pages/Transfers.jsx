import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Contacts from '../components/Contacts'

const LISTA_DE_CONTACTOS = [
  {
    name: 'Juan Perez',
    bank: 'Lemon',
    cbu: '',
  },
  {
    name: 'Marcos Leiva',
    bank: 'Mercado Pago',
    cbu: '',
  },
  {
    name: 'Camila Lopez',
    bank: 'BBVA',
    cbu: '',
  },
  {
    name: 'Carlos Fuentes',
    bank: 'Brubank',
    cbu: '',
  },
]

const Transfers = () => {
  const [isLocation, setIsLocation] = useState('')

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/user/transfers') {
      setIsLocation('contacts')
    } else if (location.pathname === '/user/transfers/newContact') {
      setIsLocation('newContact')
    }
  }, [location.pathname, isLocation])

  return (
    <main className=" w-full h-full">
      <section className="mb-24 w-full flex justify-center gap-[5.25rem] relative pl-4">
        <Link replace="user/transfers" className="mt-6">
          Contactos
        </Link>
        <Link className="pr-4 mt-6" to="newContact">
          Nuevo
        </Link>
        <div
          className={`w-72 border-b-2 border-white absolute bottom-[-2px] bg-white`}
        >
          <span
            className={`border-b-2 border-sky-500  ${isLocation === 'contacts'
              ? 'w-[50%] transform translate-x-[0%] transition-all duration-300'
              : 'w-[50%] transform translate-x-[100%] transition-all duration-300'
              } absolute bottom-[-2px]`}
          ></span>
        </div>
      </section>
      {isLocation === 'contacts' ? (
        <Contacts listContacts={LISTA_DE_CONTACTOS} />
      ) : (
        <Outlet />
      )}
    </main>
  )
}

export default Transfers
