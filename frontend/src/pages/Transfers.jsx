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

//get data from api



const Transfers = () => {

  

  const [isLocation, setIsLocation] = useState('')

  const location = useLocation()
  useEffect(() => {
    if (
      location.pathname === '/transfers' ||
      location.pathname === '/transfers'
    ) {
      setIsLocation('contacts')
    } else if (location.pathname === '/transfers/newContact') {
      setIsLocation('newContact')
    }
  }, [location.pathname, isLocation])

  return (
    <main className=" w-full min-h-screen bg-gray-100 relative">
      <h2 className="pl-4 pt-4"><Link to='/home' className='cursor-pointer'>Inicio</Link> / Transferencias</h2>
      <section className="mt-6 mb-24 w-full flex justify-center gap-[5.25rem] relative pl-4">
        <Link className="" to="/transfers">
          Contactos
        </Link>
        <Link className="pr-4" to="/transfers/newContact">
          Nuevo
        </Link>
        <div
          className={`w-4/5 border-b-2 border-white absolute bottom-[-2px] bg-white`}
        >
          <span
            className={`border-b-2 border-sky-500  ${
              isLocation === 'contacts'
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
