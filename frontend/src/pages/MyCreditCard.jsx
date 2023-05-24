import React from 'react'
import { CreditCardComp } from '../components/CreditCardComp'
import { Button } from '../components/Button'
import { TogglePill } from '../components/TogglePill'
import { ArrowRightSVG, DeleteSVG } from '../utils/icons'

export const MyCreditCard = () => {
  return (
    <main className='mx-auto bg-slate-100 w-96 flex flex-col items-center min-h-screen p-4 gap-4 text-[#2E4355] font-roboto'>
      <p className='w-full'>Home / Tarjetas / Mi tarjeta</p>
      <CreditCardComp height={180} cardNumber='5555555555554444' />
      <div className='flex flex-col w-full gap-2 font-medium font-roboto px-4'>
        <div className='flex w-full items-center justify-between'>
          <p>Pausar tarjeta</p>
          <TogglePill />
        </div>
        <div className='flex w-full items-center justify-between'>
          <p>Cambiar PIN cajero</p>
          <ArrowRightSVG />
        </div>
        <div className='flex w-full items-center justify-between'>
          <p>Denunciar</p>
          <ArrowRightSVG />
        </div>
      </div>
      <Button className='bg-[#42ADD5] text-white'>
        <DeleteSVG />
        <p className='font-medium text-center text-lg w-[70%]'>Eliminar tarjeta</p>
      </Button>
    </main>
  )
}
