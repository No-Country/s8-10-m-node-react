import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { BackButton } from '../components/BackButton'

export const Layout = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    pathname === '/' && navigate('home')
  }, [])

  return (
    <main className='bg-white flex flex-col items-center min-h-screen p-4 md:max-w-[1440px] mx-auto gap-4 text-[#2E4355] pb-[96px] border border-x-black font-inter'>
      <BackButton />
      <Outlet />
      <NavBar />
    </main>
  )
}
