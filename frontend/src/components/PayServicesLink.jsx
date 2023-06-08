import React from 'react'
import { Link } from 'react-router-dom'
import servicesBot from '../assets/images/servicesBotCompressed.png'

export const PayServicesLink = () => {
  return (
    <>
      <Link
        to="/user/services"
        className="justify-self-end h-full w-[95%] font-roboto sm:w-[80%] bg-primary rounded-[30px] max-w-[900px] p-4 text-white flex justify-center items-center max-lg:hidden gap-8"
      >
        <img src={servicesBot} className="h-24 sm:h-32" />
        <span className="flex flex-col gap-2 text-center lg:text-left">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium">
            PAGAR OTROS SERVICIOS
          </p>
          <p className="text-sm md:text-[18px] mt-1 font-medium">
            PAGA AQUI TODO LO QUE QUIERAS
          </p>
        </span>
      </Link>
    </>
  )
}
