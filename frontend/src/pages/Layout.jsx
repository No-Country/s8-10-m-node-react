import { NavBar } from '../components/NavBar'
import { Outlet, redirect } from 'react-router-dom'
import { useState } from 'react'
import PanelNavMobile from '../components/PanelNavMobile'
import { checkUserData } from '../services/checkUserData.js'

export async function loader () {
  const loggedUser = window.sessionStorage.getItem('dominoUser')
  const loggedUserJSON = JSON.parse(loggedUser)
  console.log(loggedUserJSON)
  const userAlias = loggedUserJSON.payload.accountInfo.alias
  const userData = await checkUserData(userAlias)
  if (userData) {
    return (userData)
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
    <main className="md:ml-24 min-h-screen">
      <PanelNavMobile toggleOpen={toggleOpen} />
      <NavBar
        toggleOpen={toggleOpen}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Outlet />
    </main>
  )
}
