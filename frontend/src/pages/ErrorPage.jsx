import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div className='bg-gradient-to-r from-[#FDFBFB] to-[#EBEDEE] h-screen w-screen flex flex-col items-center justify-center font-inter gap-12'>
      <h1 className='text-primary font-bold text-xl'>ERROR</h1>
      <h4 className='text-tableHeadColor font-bold text-9xl'>404</h4>
      <Link to='/login' className='py-2 px-8 bg-primary text-white text- font-semibold rounded-full'>
        Volver al inicio
      </Link>
    </div >
  )
}
