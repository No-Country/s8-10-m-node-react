import React from 'react'
import { Link } from 'react-router-dom'
import servicesBot from '../assets/images/servicesBotCompressed.png'


export const PayServices = () => {
  return (
    <>
      <Link to='/user/services' className='justify-self-end h-full w-[95%] sm:w-[80%] bg-primary rounded-md p-4 text-white flex justify-center items-center'>
        <img src={servicesBot} className='h-24 sm:h-32' />
        <span className='flex flex-col gap-2 text-center lg:text-left'>
          <p className='text-2xl md:text-4xl lg:text-5xl font-semibold'>PAGAR OTROS SERVICIOS</p>
          <p className='text-sm md:text-[20px] font-semibold'>PAGA AQUI TODO LO QUE QUIERAS</p>
        </span>
      </Link>
    </>
  )
}
