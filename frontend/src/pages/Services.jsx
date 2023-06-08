import React from 'react'
import { SERVICES } from '../utils/servicesItems'
import { useLoaderData } from 'react-router-dom'
import { ServiceCard } from '../components/ServiceCard'
import { PageTitle } from '../components/PageTitle'

export const loader = () => {
  const servicesArr = SERVICES
  const entertainmentArr = servicesArr.slice(0, 3)
  const homeArr = servicesArr.slice(3, 6)
  const workArr = servicesArr.slice(6)
  return { entertainmentArr, homeArr, workArr }
}

export const Services = () => {
  const data = useLoaderData()
  const { entertainmentArr, homeArr, workArr } = data

  return (
    <div className='flex flex-col p-4 py-6 font-roboto gap-2'>
      <PageTitle>
        Pagar servicios
      </PageTitle>
      <h2 className='font-medium text-xl text-primary'>Entretenimiento</h2>
      <div className='w-full grid grid-cols-servicesTables gap-4 justify-items-center'>
        {entertainmentArr.map(service => (
          <ServiceCard service={service} key={service.name} />
        ))}
      </div>
      <h2 className='font-medium text-xl text-primary'>Hogar</h2>
      <div className='w-full grid grid-cols-servicesTables gap-4 justify-items-center'>
        {homeArr.map(service => (
          <ServiceCard service={service} key={service.name} />
        ))}
      </div>
      <h2 className='font-medium text-xl text-primary'>Trabajo</h2>
      <div className='w-full grid grid-cols-servicesTables gap-4 justify-items-center'>
        {workArr.map(service => (
          <ServiceCard service={service} key={service.name} />
        ))}
      </div>
    </div>
  )
}
