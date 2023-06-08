import ConfigurationOptions from './ConfigurationOptions'
import {
  IoPersonCircleOutline,
  IoChatbubbleEllipsesOutline,
  IoMoonOutline,
  IoReaderOutline,
  IoExitOutline,
} from 'react-icons/io5'
import { TogglePill } from './TogglePill'
import { useUserContext } from '../context/UserContext'

const OptionContainer = () => {
  const options = [
    {
      id: 1,
      name: 'Datos personales',
      icon: <IoPersonCircleOutline size={25} />,
      link: '../perfil',
    },
    {
      id: 2,
      name: 'Soporte',
      icon: <IoChatbubbleEllipsesOutline size={25} />,
    },
    {
      id: 3,
      name: 'Terminos y condiciones',
      icon: <IoReaderOutline size={25} />,
    },
    {
      id: 4,
      name: 'Politica de privacidad',
      icon: <IoReaderOutline size={25} />,
    },
  ]

  const { logOut } = useUserContext()

  return (
    <>
      {options.map((option) => {
        return <ConfigurationOptions key={option.id} option={option} />
      })}
      <div className="w-[90%] h-auto flex justify-between items-center font-roboto px-2">
        <div className="flex items-center gap-3 md:gap-8">
          <span className="hover:rotate-90 transition-[rotate] duration-400">
            <IoMoonOutline size={25} />
          </span>
          <p>Activar Modo Oscuro</p>
        </div>
        <TogglePill />
      </div>

      <div
        className="w-[90%] h-auto flex items-center font-roboto gap-3 md:gap-8 text-red-500 px-2 cursor-pointer"
        onClick={logOut}
      >
        <IoExitOutline size={25} />
        <p>Cerrar sesión</p>
      </div>
    </>
  )
}

export default OptionContainer
