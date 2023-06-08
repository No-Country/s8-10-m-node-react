import React from 'react'
import { SERVICES } from '../utils/servicesItems'
import { useLoaderData } from 'react-router-dom'
import { ServiceCard } from '../components/ServiceCard'
import { PageTitle } from '../components/PageTitle'

export const loader = () => {
  const servicesArr = SERVICES
  const entertainmentArr = servicesArr.slice(0, 4)
  const homeArr = servicesArr.slice(4, 6)
  const workArr = servicesArr.slice(6)
  return { entertainmentArr, homeArr, workArr }
}

export const Services = () => {
  const data = useLoaderData()
  const { entertainmentArr, homeArr, workArr } = data

  return (
    <div className='flex flex-col p-4 font-roboto gap-4'>
      <PageTitle>
        Pagar servicios
      </PageTitle>
      <h2 className='font-medium text-xl text-primary'>Entretenimiento</h2>
      <div className='flex gap-4 w-full items-center flex-wrap justify-evenly'>
        {entertainmentArr.map(service => (
          <ServiceCard service={service} />
        ))}
      </div>
      <h2 className='font-medium text-xl text-primary'>Hogar</h2>
      <div className='flex gap-4 w-full items-center flex-wrap justify-evenly'>
        {homeArr.map(service => (
          <ServiceCard service={service} />
        ))}
      </div>
      <h2 className='font-medium text-xl text-primary'>Trabajo</h2>
      <div className='flex gap-4 w-full items-center flex-wrap justify-evenly'>
        {workArr.map(service => (
          <ServiceCard service={service} />
        ))}
      </div>
    </div>
  )
}
