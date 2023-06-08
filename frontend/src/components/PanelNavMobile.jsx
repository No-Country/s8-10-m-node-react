import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaRegBell } from 'react-icons/fa'
import PanelBack from '../components/PanelBack'
import { useState, useEffect } from 'react'

const PanelNavMobile = ({ toggleOpen, items }) => {
  const [mobilePanel, setMobilePanel] = useState({
    condition: false,
    name: '',
  })

  const location = useLocation()

  return (
    <section
      className={`w-full flex justify-evenly gap-8 items-center bg-gradient-to-r from-[#FDFBFB] to-[#EBEDEE] drop shadow-tableRowColor shadow-lg md:h-36 ${location.pathname !== '/user/home' && 'md:h-16'}`}
    >
      {mobilePanel.condition ? (
        <>
          <FaBars
            size={20}
            onClick={toggleOpen}
            className=" text-[#4C27AE] text-xl cursor-pointer md:hidden"
          />
          <div className="flex gap-3 items-center font-roboto md:flex-col md:gap-0 py-4">
            <p>Bienvenido</p>
            <h2 className="md:text-2xl">Carlos</h2>
          </div>
          <Link>
            <FaRegBell className="text-[#4C27AE] text-xl md:text-2xl md:cursor-pointer" />
          </Link>
        </>
      ) : (
        <PanelBack name={mobilePanel.name} />
      )}
    </section>
  )
}

export default PanelNavMobile
