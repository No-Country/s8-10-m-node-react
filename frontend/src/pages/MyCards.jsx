import React from 'react'
import { CreditCardComp } from '../components/CreditCardComp'
import { Button } from '../components/Button'
import { PlusSVG } from '../utils/icons'
import { PageTitle } from './../components/PageTitle'
import { useRouteLoaderData } from 'react-router-dom'

export const MyCards = () => {
  const user = useRouteLoaderData('userLoggedIn')
  console.log(user)

  const dominoCard = user.payload.accountInfo.dominoCard.cardNumber
  const associateCards = user.payload.accountInfo.associateCards

  const { fullName, lastName } = user.payload.profile

  const cardName = `${fullName} ${lastName}`

  return (
    <>
      <PageTitle>
        Tarjetas
      </PageTitle>
      <h3 className='font-semibold w-full pl-4 text-xl'>Tu tarjeta</h3>
      <CreditCardComp cardNumber={dominoCard} name={cardName} isDomino={true} />
      {associateCards.length > 0 ?
        (<>
          <h2 className='font-semibold w-full pl-4 text-xl'>Otras tarjetas</h2>
          <div className='flex flex-wrap w-full gap-6 justify-center'>
            <CreditCardComp cardNumber='378282246310005' name={cardName} />
            <CreditCardComp cardNumber='6111111111111111' name={cardName} />
          </div>
        </>) :
        null

      }
      <button className='bg-[#F9FAFB] border-[#F9FAFB] flex '>
        <PlusSVG />
        <p className='font-medium text-center text-lg w-[70%]'>Asociar tarjeta</p>
      </button>
    </>
  )
}
