import { NavBar } from '../components/NavBar'
import { Outlet, redirect } from 'react-router-dom'
import { useState } from 'react'
import PanelNavMobile from '../components/PanelNavMobile'
import { checkUserData } from '../services/checkUserData.js'

export async function loader () {
  const loggedUser = window.sessionStorage.getItem('dominoUser')
  const loggedUserJSON = JSON.parse(loggedUser)
  const userAlias = loggedUserJSON.payload.accountInfo.alias
  try {
    const userData = await checkUserData(userAlias)
    if (loggedUser) {
      return (userData)
    } else {
      return redirect('/login')
    }
  } catch (error) {
    console.error(error)
  }
}

export const UserLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  function toggleOpen () {
    setIsOpen(!isOpen)
  }
<<<<<<< HEAD

=======
  const { windowWidth } = useLayoutContext()
  const menuItems = [
    {
      name: 'Home',
      icon: <FaHome size={25} />,
      link: '/user/home',
    },
    {
      name: 'Movimientos',
      icon: <FaExchangeAlt size={25} />,
      link: '/user/movements',
    },
    {
      name: 'Servicios',
      icon: <FaDollarSign size={25} />,
      link: '/user/services',
      condition: windowWidth > 768 ? true : false,
    },
    {
      name: 'Tarjetas',
      icon: <FaRegCreditCard size={25} />,
      link: '/user/mycards',
    },
    {
      name: 'Transferir',
      icon: <FaArrowRight size={25} />,
      link: '/user/transfers',
    },
    {
      name: 'Recargar',
      icon: <FaArrowUp size={25} />,
      link: '/user/recarga',
    },
  ]
>>>>>>> 4706c439b25e237933b6f323e0e056532b70d1d0
  return (
    <main className="md:ml-24 min-h-screen">
      <PanelNavMobile toggleOpen={toggleOpen} />
      <NavBar
        toggleOpen={toggleOpen}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Outlet />
    </main>
  )
}
