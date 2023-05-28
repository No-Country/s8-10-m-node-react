import React from 'react'
import { CreditCardComp } from '../components/CreditCardComp'
import { Button } from '../components/Button'
import { PlusSVG } from '../utils/icons'
import { PageTitle } from './../components/PageTitle'

export const MyCards = () => {
  return (
    <>
      <PageTitle>
        Tarjetas
      </PageTitle>
      <h3 className='font-semibold w-full pl-4 text-xl'>Tu tarjeta</h3>
      <CreditCardComp height={180} cardNumber='123123123123213' />
      <h2 className='font-semibold w-full pl-4 text-xl'>Otras tarjetas</h2>
      <div className='flex flex-wrap w-full gap-6 justify-center'>
        <CreditCardComp height='110' cardNumber='378282246310005' />
        <CreditCardComp height='120' cardNumber='4111111111111111' />
        <CreditCardComp height='120' cardNumber='5555555555554444' />
      </div>
      <Button className='bg-[#F9FAFB] border-[#F9FAFB]'>
        <PlusSVG />
        <p className='font-medium text-center text-lg w-[70%]'>Asociar tarjeta</p>
      </Button>
    </>
  )
}
