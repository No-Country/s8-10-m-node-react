import React from 'react'
import { CreditCardComp } from '../components/CreditCardComp'
import { Button } from '../components/Button'
import { PlusSVG } from '../utils/icons'
import { PageTitle } from './../components/PageTitle'
import { useRouteLoaderData } from 'react-router-dom'

export const MyCards = () => {
  const user = useRouteLoaderData('userLoggedIn')
  console.log(user)

  const { fullName, lastName } = user.payload.profile

  const cardName = `${fullName} ${lastName}`

  return (
    <>
      <PageTitle>
        Tarjetas
      </PageTitle>
      <h3 className='font-semibold w-full pl-4 text-xl'>Tu tarjeta</h3>
      <CreditCardComp height={180} cardNumber='123123123123213' name={cardName} isDomino={true} />
      <h2 className='font-semibold w-full pl-4 text-xl'>Otras tarjetas</h2>
      <div className='flex flex-wrap w-full gap-6 justify-center'>
        <CreditCardComp height='110' cardNumber='378282246310005' name={cardName} />
        <CreditCardComp height='120' cardNumber='4111111111111111' name={cardName} />
      </div>
      <Button className='bg-[#F9FAFB] border-[#F9FAFB]'>
        <PlusSVG />
        <p className='font-medium text-center text-lg w-[70%]'>Asociar tarjeta</p>
      </Button>
    </>
  )
}
