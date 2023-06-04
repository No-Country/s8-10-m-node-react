import React, { useState } from 'react'
import { ArrowRightSVG, ArrowUpSVG, HomeSVG, QrCodeSVG, ServicesSVG } from '../utils/icons'
import { NavLink } from 'react-router-dom'
import { NavAppTitle } from './NavButton'
import { useUserContext } from '../context/UserContext'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { logOut } = useUserContext()

  function toggleOpen () {
    console.log(isOpen)
    setIsOpen(prevState => !prevState)
  }

  const menuItems = [{
    name: 'Home',
    icon: <HomeSVG />,
    link: '/user/home'
  },
  {
    name: 'Servicios',
    icon: <ServicesSVG />,
    link: '/user/services'
  },
  {
    name: 'Movimientos',
    icon: <ArrowRightSVG />,
    link: '/user/movements'
  },
  {
    name: 'Perfil',
    icon: <ArrowUpSVG />,
    link: '/user/profile'
  },
  {
    name: 'Perfil',
    icon: <QrCodeSVG />,
    link: '/'
  }
  ]

  return (
    <nav className={`flex-col fixed bg-[#4C27AE] p-6  top-0 gap-4 left-0 h-screen ${isOpen ? 'w-48' : 'w-24'} items-center transition-[width] z-10 hidden sm:flex`}>
      <NavAppTitle onClick={toggleOpen}>
        D{isOpen && 'omino'}
      </NavAppTitle>
      <h4 className='text-white'>Menu</h4>
      <span className='w-full border-white border-t-2 transition-[width]' />
      {menuItems.map(item => (
        <NavLink className={`px-2 py-4 bg-white flex rounded-[10px] items-center justify-center w-full gap-2 duration-500`} key={item.link} to={item.link}>
          {item.icon}
          <p className={`text-base font-bold ${isOpen ? 'inline-block' : 'hidden'} transition-all`}>
            {item.name}
          </p>
        </NavLink>
      ))}
      <button className={`px-2 py-4 bg-white flex rounded-[10px] items-center justify-center w-full gap-2 duration-500`} onClick={logOut}>
        LOut
      </button>
    </nav>
  )
}
