import { NavAppTitle } from './NavButton'
import { useUserContext } from '../context/UserContext'
import { IoExitOutline } from 'react-icons/io5'
import MenuItems from './MenuItems'
import { Link, useRouteLoaderData } from 'react-router-dom'

export const NavBar = ({ isOpen, toggleOpen, setIsOpen, items }) => {
  const { logOut } = useUserContext()
  const { user } = useUserContext()

  const userData = useRouteLoaderData('userLoggedIn')
  const userName = `${userData.payload.profile.fullName} ${userData.payload.profile.lastName}`

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
      <MenuItems isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`w-full h-auto flex items-center justify-between bg-transparent border-t pt-3 text-white ${isOpen && 'gap-4'
          }`}
      >
        <Link to="configuracion" onClick={() => setIsOpen(false)}>
          <img
            className="w-14 h-14 rounded-lg object-cover cursor-pointer "
            src="https://www.huie.org.nz/wp-content/uploads/2022/05/elizeu-dias-2EGNqazbAMk-unsplash-1-e1653620036569-350x233.jpg"
            alt="imagen predeterminada de usuario"
          />
        </Link>
        <div
          className={`max-sm:w-full ${isOpen ? 'md:w-44' : 'md:w-0'
            } justify-between items-center transition-opacity duration-800  ${isOpen ? ' opacity-1 flex duration-[1500ms]' : 'opacity-0'
            }  `}
        >
          <p className="text-center text-sm font-roboto tracking-wider">
            {`${user.payload.profile.fullName} ${user.payload.profile.lastName}`}
          </p >
          <IoExitOutline
            size={25}
            className="rotate-180 cursor-pointer"
            onClick={logOut}
          />
        </div >
      </div >
    </nav >
  )
}
