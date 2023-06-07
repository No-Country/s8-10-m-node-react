import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaBell } from 'react-icons/fa'
import PanelBack from '../components/PanelBack'
import { useState, useEffect } from 'react'

const PanelNavMobile = ({ toggleOpen, items }) => {
  const [mobilePanel, setMobilePanel] = useState({
    condition: false,
    name: '',
  })

  const location = useLocation()
  useEffect(() => {
    for (const item of items) {
      if (location.pathname === '/user/home' && item.link === '/user/home') {
        return setMobilePanel({
          condition: true,
          name: item.name,
        })
      } else {
        return setMobilePanel({
          condition: false,
          name: item.name,
        })
      }
    }
  }, [location])

  return (
    <section
      className={`w-full flex justify-evenly gap-8 items-center h-12 bg-gradient-to-r from-[#FDFBFB] to-[#EBEDEE] shadow-lg md:h-36 md:mb-8 ${
        location.pathname !== '/user/home' && 'md:h-16'
      }`}
    >
      {mobilePanel.condition ? (
        <>
          <FaBars
            size={20}
            onClick={toggleOpen}
            className=" text-black text-xl cursor-pointer md:hidden"
          />
          <div className="flex gap-3 items-center font-roboto md:flex-col md:gap-0">
            <p>Bienvenido</p>
            <h2 className="md:text-2xl">Carlos</h2>
          </div>
          <Link>
            <FaBell size={20} />
          </Link>
        </>
      ) : (
        <PanelBack name={mobilePanel.name} />
      )}
    </section>
  )
}

export default PanelNavMobile
