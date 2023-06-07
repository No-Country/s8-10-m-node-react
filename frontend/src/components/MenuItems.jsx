import { NavLink } from 'react-router-dom'
import {
  FaArrowUp,
  FaArrowRight,
  FaHome,
  FaArrowDown,
  FaExchangeAlt,
  FaDollarSign,
} from 'react-icons/fa'
import { useLayoutContext } from '../context/LayoutContext'

const MenuItems = ({ isOpen, setIsOpen }) => {
  const { windowWidth } = useLayoutContext

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
    <>
      {menuItems.map((item) => (
        <NavLink
          className={`px-3 py-3 bg-white flex ${item.condition && 'hidden'
            } rounded-[10px] items-center justify-center w-full gap-2 duration-600`}
          key={item.link}
          to={item.link}
          onClick={() => setIsOpen(false)}
        >
          {item.icon}
          <p
            className={`text-base font-roboto tracking-wider ${isOpen ? 'inline-block' : 'hidden'
              }`}
          >
            {item.name}
          </p>
        </NavLink>
      ))}
    </>
  )
}

export default MenuItems
