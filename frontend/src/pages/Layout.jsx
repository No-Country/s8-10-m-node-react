import { NavBar } from '../components/NavBar'
import { Outlet, useRouteLoaderData, redirect } from 'react-router-dom'
import { useUserContext } from './../context/UserContext';

export function loader () {
  const loggedUserJSON = window.sessionStorage.getItem('dominoUser')
  if (loggedUserJSON) {
    return JSON.parse(loggedUserJSON)
  } else {
    return redirect('/login')
  }
}

export const UserLayout = () => {
  const isUserLoggedIn = useRouteLoaderData('userLoggedIn')
  const { loading } = useUserContext()
  //pl-24 es el minimo para el navBar
  return (
    <main className="sm:pl-32 sm:p-8">
      <NavBar />
      {loading ?
        <Loader /> :
        <Outlet />
      }
    </main>
  )
}
