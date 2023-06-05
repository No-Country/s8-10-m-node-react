import { NavBar } from '../components/NavBar'
import { Link, Outlet, redirect } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaBell } from 'react-icons/fa'

export function loader () {
  const loggedUserJSON = window.sessionStorage.getItem('dominoUser')
  if (loggedUserJSON) {
    return JSON.parse(loggedUserJSON)
  } else {
    return redirect('/login')
  }
}

export const UserLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  function toggleOpen () {
    setIsOpen(!isOpen)
  }

  return (
    <main className="md:pl-24 bg-gradient-to-r from-[#FDFBFB] to-[#EBEDEE] min-h-screen font-roboto">
      <section className="w-full flex justify-evenly gap-8 items-center h-12 shadow-lg md:h-36">
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
      </section>
      <NavBar toggleOpen={toggleOpen} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='p-4 min-h-full'>
        <Outlet />
      </div>
    </main>
  )
}
