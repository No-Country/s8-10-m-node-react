import React from 'react'
import { CreditCardComp } from '../components/CreditCardComp'
import { Outlet } from 'react-router-dom'
import { Button } from '../components/Button'
import { PlusSVG } from '../utils/icons'

export const MyCards = () => {
  return (
    <main className='mx-auto bg-slate-100 w-96 flex flex-col items-center min-h-screen p-4 gap-4 text-[#2E4355] font-roboto'>
      <p className='w-full'>Home / Tarjetas</p>
      <h1 className='font-bold w-full pl-4   text-3xl'>Tu tarjeta</h1>
      <CreditCardComp height={180} cardNumber='4111111111111111' />
      <h2 className='font-bold w-full pl-4 text-2xl'>Otras tarjetas</h2>
      <CreditCardComp height='110' cardNumber='378282246310005' />
      <CreditCardComp height='120' cardNumber='123123123123213' />
      <CreditCardComp height='120' cardNumber='5555555555554444' />
      <Button className='bg-[#F9FAFB] border-[#F9FAFB]'>
        <PlusSVG />
        <p className='font-medium text-center text-lg w-[70%]'>Asociar tarjeta</p>
      </Button>
      <Outlet />
    </main>
  )
}
