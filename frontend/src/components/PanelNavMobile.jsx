import { useLayoutContext } from '../context/LayoutContext'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaBell } from 'react-icons/fa'
import PanelBack from '../components/PanelBack'
import { useState, useEffect } from 'react'

const PanelNavMobile = ({ toggleOpen }) => {
  const [mobilePanel, setMobilePanel] = useState(false)

  const location = useLocation()
  const { windowWidth } = useLayoutContext()
  useEffect(() => {
    if (location.pathname === '/user/home') {
      setMobilePanel(true)
    } else {
      setMobilePanel(false)
    }
  }, [location])

  // TODO: Terminar la condifción para que utilice bien estos paneles
  return (
    <section className="w-full flex justify-evenly gap-8 items-center h-12 bg-gradient-to-r from-[#FDFBFB] to-[#EBEDEE] shadow-lg md:h-36">
      {mobilePanel && windowWidth < 768 ? (
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
        <PanelBack name={location.pathname} />
      )}
    </section>
  )
}

export default PanelNavMobile
