import React from 'react'
import { BothArrowsSVG, HomeSVG, QrCodeSVG, ServicesSVG } from '../utils/icons'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  const menuItems = [{
    name: 'Home',
    icon: <HomeSVG />,
    link: '/home'
  },
  {
    name: 'Servicios',
    icon: <ServicesSVG />,
    link: '/services'
  },
  {
    name: 'Movimientos',
    icon: <BothArrowsSVG />,
    link: '/movements'
  },
  {
    name: 'Perfil',
    icon: <QrCodeSVG />,
    link: '/profile'
  }
  ]

  return (
    <div className='w-[95%] z-10 flex items-center gap-4 fixed mx-auto justify-around bottom-4 p-3 rounded-2xl bg-gray-200 h-16 shadow-md'>
      {menuItems.map(item => (
        <span className='' key={item.name}>
          <Link to={item.link}>
            <span className='flex z-100 flex-col items-center'>
              {item.icon}
              <p className='text-sm font-bold'>
                {item.name}
              </p>
            </span>
          </Link>
        </span>
      ))}
    </div>
  )
}
