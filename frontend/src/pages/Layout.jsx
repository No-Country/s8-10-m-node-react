import { NavBar } from '../components/NavBar'
import { Outlet, redirect } from 'react-router-dom'
import { useState } from 'react'
import PanelNavMobile from '../components/PanelNavMobile'

export function loader() {
  const loggedUserJSON = window.sessionStorage.getItem('dominoUser')
  if (loggedUserJSON) {
    return JSON.parse(loggedUserJSON)
  } else {
    return redirect('/login')
  }
}

export const UserLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  function toggleOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <main className="">
      <PanelNavMobile toggleOpen={toggleOpen} />
      <NavBar toggleOpen={toggleOpen} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Outlet />
    </main>
  )
}
