import {
  FaArrowUp,
  FaArrowRight,
  FaHome,
  FaArrowDown,
  FaExchangeAlt,
  FaDollarSign,
} from 'react-icons/fa'
import { NavAppTitle } from './NavButton'
import { useUserContext } from '../context/UserContext'
import { IoExitOutline } from 'react-icons/io5'
import MenuItems from './MenuItems'
import { useLayoutContext } from '../context/LayoutContext'

export const NavBar = ({ isOpen, toggleOpen, setIsOpen }) => {
  const { logOut } = useUserContext()
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
    <nav
      className={`flex flex-col fixed bg-[#4C27AE] p-6 top-0 gap-4 left-0 h-screen ${isOpen
        ? 'max-sm:w-full md:w-72 translate-x-0'
        : 'max-sm:w-0 -translate-x-[150%] md:w-24 md:translate-x-0'
        } items-center transition-all duration-500 z-10`}
    >
      <NavAppTitle func={toggleOpen} isOpen={isOpen}>
        D{isOpen && 'ominó'}
      </NavAppTitle>
      <h4
        className={`text-center ${isOpen && 'text-start'
          } font-roboto tracking-wide text-white w-full pb-2 border-b`}
      >
        Menu
      </h4>
      <MenuItems items={menuItems} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full h-14 flex items-center justify-between bg-transparent border-t pt-5 text-white ">
        <img
          className="w-14 h-14 rounded-lg object-cover"
          src="https://www.huie.org.nz/wp-content/uploads/2022/05/elizeu-dias-2EGNqazbAMk-unsplash-1-e1653620036569-350x233.jpg"
          alt=""
        />

        <div
          className={`max-sm:w-48 flex max-sm:justify-between transition-opacity duration-800  ${isOpen ? 'opacity-1 duration-[1500ms]' : 'opacity-0'
            } `}
        >
          <p className="text-smfont-roboto md:pr-12 tracking-wide">
            Elizeu Dias
          </p>
          <IoExitOutline size={25} className="rotate-180" onClick={logOut} />
        </div>
      </div>
    </nav>
  )
}
