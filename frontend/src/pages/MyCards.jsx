import React from 'react'
import { CreditCardComp } from '../components/CreditCardComp'
import { PageTitle } from './../components/PageTitle'
import { Link, useRouteLoaderData } from 'react-router-dom'
import { FaRegCreditCard, FaAngleRight } from 'react-icons/fa'
import { CreditCardWithLink } from '../components/CreditCardWithLink'

export const MyCards = () => {
  const user = useRouteLoaderData('userLoggedIn')

  const dominoCard = user.payload.accountInfo.dominoCard.cardNumber
  const associateCards = user.payload.accountInfo.associateCards

  const { fullName, lastName } = user.payload.profile

  const cardName = `${fullName} ${lastName}`

  return (
    <div className='py-6 md:py-4 px-4 flex flex-col gap-4'>
      <PageTitle>Tarjetas</PageTitle>
      <h3 className="font-semibold w-full text-xl">Tu tarjeta</h3>
      <CreditCardWithLink cardName={cardName} isDomino={true} cardNumber={dominoCard} />
      {associateCards.length == 0 ? (
        <div className='flex flex-col gap-4'>
          <h2 className="font-semibold w-full text-xl">Tarjetas asociadas</h2>
          <div className="flex flex-wrap w-full items-center justify-center gap-6">
            <CreditCardWithLink cardNumber="378282246310005" name={cardName} />
            <CreditCardWithLink cardNumber="6331245123123" name={cardName} />
          </div>
        </div>
      ) : null}
      <button className="bg-[#F9FAFB] border-primary border-[1px] rounded-md flex items-center justify-center gap-4 w-[90%] self-center sm:w-52 py-2 px-4">
        <FaRegCreditCard fill='#4C27AE' />
        <p className="font-medium text-center text-lg text-primary">
          Asociar tarjeta
        </p>
      </button>
    </div>
  )
}
