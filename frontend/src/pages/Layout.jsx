import Loader from '../components/Loader'
import { NavBar } from '../components/NavBar'
import { Outlet, useRouteLoaderData, redirect } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

export function loader() {
  const loggedUserJSON = window.sessionStorage.getItem('dominoUser')
  if (loggedUserJSON) {
    return JSON.parse(loggedUserJSON)
  } else {
    return redirect('/login')
  }
}

export const UserLayout = () => {
  const isUserLoggedIn = useRouteLoaderData('userLoggedIn')
  console.log(isUserLoggedIn)

  //pl-24 es el minimo para el navBar
  return (
    <main className="">
      {/* <NavBar /> */}
      <Outlet />
    </main>
  )
}
