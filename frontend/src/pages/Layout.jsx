import React, { useEffect } from 'react'
import { NavBar } from '../components/NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

export const UserLayout = () => {
  const { user } = useUserContext()
  console.log(user)
  const navigate = useNavigate()

  useEffect(() => {
    if (user === null) {
      navigate('/login')
    }
  }, [])

  //pl-24 es el minimo para el navBar

  return (
    <main className="flex flex-col relative pl-32 p-8">
      <NavBar />
      <Outlet />
    </main>
  )
}
