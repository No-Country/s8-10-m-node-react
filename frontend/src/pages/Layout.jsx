import { NavBar } from '../components/NavBar'
import { Outlet, redirect } from 'react-router-dom'
import { useState } from 'react'
import PanelNavMobile from '../components/PanelNavMobile'
import {
  FaArrowUp,
  FaArrowRight,
  FaHome,
  FaArrowDown,
  FaExchangeAlt,
  FaDollarSign,
} from 'react-icons/fa'
import { useLayoutContext } from '../context/LayoutContext'

export async function loader () {
  const loggedUserJSON = window.sessionStorage.getItem('dominoUser')
  if (loggedUserJSON) {
    return (JSON.parse(loggedUserJSON))
  } else {
    return redirect('/login')
  }
}

export const UserLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  function toggleOpen () {
    setIsOpen(!isOpen)
  }
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
      name: 'Retirar',
      icon: <FaArrowDown size={25} />,
      link: '',
      condition: windowWidth > 768 ? true : false,
    },
    {
      name: 'Transferir',
      icon: <FaArrowRight size={25} />,
      link: '/user/transfers',
    },
    {
      name: 'Recargar',
      icon: <FaArrowUp size={25} />,
      link: null,
    },
  ]
  return (
    <main className="md:ml-24 min-h-screen">
      <PanelNavMobile toggleOpen={toggleOpen} items={menuItems} />
      <NavBar
        toggleOpen={toggleOpen}
        isOpen={isOpen}
        items={menuItems}
        setIsOpen={setIsOpen}
      />
      <Outlet />
    </main>
  )
}
