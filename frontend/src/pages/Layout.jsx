import { NavBar } from '../components/NavBar'
import { Outlet, redirect } from 'react-router-dom'
import { useState } from 'react'
import PanelNavMobile from '../components/PanelNavMobile'
import { checkUserData } from '../services/checkUserData.js'

export async function loader () {
  const loggedUser = window.sessionStorage.getItem('dominoUser')
  const loggedUserJSON = JSON.parse(loggedUser)
  const userAlias = loggedUserJSON.payload.accountInfo.alias
  try {
    const userData = await checkUserData(userAlias)
    if (loggedUser) {
      return userData
    } else {
      return redirect('/login')
    }
  } catch (error) {
    console.error(error)
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
      <NavBar toggleOpen={toggleOpen} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Outlet />
    </main>
  )
}
