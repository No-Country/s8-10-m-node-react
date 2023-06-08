import { Link } from 'react-router-dom'
import {
  FaArrowUp,
  FaArrowRight,
  FaHome,
  FaExchangeAlt,
  FaDollarSign,
  FaRegCreditCard
} from 'react-icons/fa'

const MenuItems = ({ isOpen, setIsOpen }) => {

  const items = [
    {
      'name': 'Home',
      'icon': <FaHome size={25} />,
      'link': '/user/home',
    },
    {
      'name': 'Movimientos',
      'icon': <FaExchangeAlt size={25} />,
      'link': '/user/movements',
    },
    {
      'name': 'Servicios',
      'icon': <FaDollarSign size={25} />,
      'link': '/user/services',
    },
    {
      'name': 'Tarjetas',
      'icon': <FaRegCreditCard size={25} />,
      'link': '/user/mycards',
    },
    {
      'name': 'Transferir',
      'icon': <FaArrowRight size={25} />,
      'link': '/user/transfers',
    }
  ]

  return (
    <>
      {items.map((item) => (
        <Link
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
        </Link>
      ))}
    </>
  )
}

export default MenuItems
