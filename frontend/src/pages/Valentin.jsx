import React from 'react'
import { Card } from '../components/Card'

export const Valentin = () => {
  return (
    <main className='mx-auto bg-slate-100 w-96 flex flex-col items-center h-screen p-4 gap-4 text-[#2E4355] font-roboto'>
      <p className='w-full'>Home / Tarjetas</p>
      <h1 className='font-bold w-full pl-4   text-3xl'>Tu tarjeta</h1>
      <Card height={180} variant='visa' cardNumber='1234123412341234' />
      <h2 className='font-bold w-full pl-4 text-2xl'>Otras tarjetas</h2>
      <Card height='110' variant='amex' cardNumber='1234123412341234' />
      <Card height='120' variant='masterCard' cardNumber='1234123412341234' />
      <button className='bg-[#F9FAFB] border-[#F9FAFB] rounded-md w-full py-2 flex items-center shadow-md'>
        <p className='text-4xl w-1/4 inline-block'>+</p>
        <p className='font-bold text-xl inline-block'>Asociar tarjeta</p>
      </button>
    </main>
  )
}
