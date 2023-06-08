import React, { useState } from 'react'
import { SERVICES } from '../utils/servicesItems'
import { useLoaderData } from 'react-router-dom'
import InputField from '../components/InputField'

export const loader = ({ params }) => {
  const { serviceId } = params
  const service = SERVICES.find(service => service.path === serviceId)
  return service
}

export const PayService = () => {
  const [serviceCode, setServiceCode] = useState('')

  const service = useLoaderData()

  function handleChange () {

  }

  return (
    <div className='flex flex-col w-[75%] px-4 md:w-1/2 min-h-[70vh] items-center mx-auto justify-center gap-6'>
      <h1 className='font-bold text-primary tracking-tight text-2xl'>Ingresa tu codigo de pago</h1>
      <span className='bg-gradient-to-b from-black py-2 to-slate-800 h-36 w-full flex items-center justify-center rounded-md'>
        <img src={service.svg} className='h-[80%]' />
      </span>
      <h2 className='font-bold text-xl leading-3 tracking-tight'>{service.name}</h2>
      <p>Descuento del 5% pagando con VISA</p>
      <InputField labelFor='Codigo' content='Código' />
      <span className='w-full flex items-center justify-between gap-6'>
        <button className='py-1 px-8 w-[300px] rounded-full border-red-500 border-[1px] text-red-700 font-medium'>Cancelar</button>
        <button className='py-1 px-8 w-[300px] rounded-full bg-primary text-white font-medium'>Continuar</button>
      </span>
    </div>
  )
}
