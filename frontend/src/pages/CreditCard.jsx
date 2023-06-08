import React from 'react'
import { CreditCardComp } from '../components/CreditCardComp'
import { TogglePill } from '../components/TogglePill'
import { FaAngleDoubleRight, FaTrash } from 'react-icons/fa'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'

export const loader = async ({ request, params }) => {
  const { creditCardId } = params
  const isDomino = new URL(request.url).searchParams.get('domino')
  return { isDomino, creditCardId }
}

export const CreditCard = () => {
  const { isDomino, creditCardId } = useLoaderData()
  const userData = useRouteLoaderData('userLoggedIn')

  const card = isDomino ? userData.payload.accountInfo.dominoCard : userData.payload.accountInfo.associateCards.filter(card => card.cardNumber === creditCardId)
  console.log(card)

  return (
    <div className='py-6 md:py-4 px-4 gap-4 max-w-5xl mx-auto'>
      <PageTitle>Tarjetas</PageTitle>
      <span className='flex items-center w-full justify-center py-4'>
        <CreditCardComp cardNumber={card[0].cardNumber} name={card[0].holder} isDomino={isDomino} />
      </span>
      <div className="flex flex-col w-full gap-4 font-medium font-roboto px-2 py-6">
        <div className="flex w-full items-center justify-between">
          <p>Pausar tarjeta</p>
          <TogglePill />
        </div>
        <div className="flex w-full items-center justify-between">
          <p>Cambiar PIN cajero</p>
          <span className="cursor-pointer">
            <FaAngleDoubleRight />
          </span>
        </div>
        <div className="flex w-full items-center justify-between">
          <p>Denunciar</p>
          <span className="cursor-pointer">
            <FaAngleDoubleRight />
          </span>
        </div>
        {!isDomino &&
          <button className="bg-[#42ADD5] text-white w-[90%] self-center sm:w-52 py-2 px-4 flex items-center justify-center gap-4">
            <FaTrash />
            <p className="font-medium text-center text-lg">
              Eliminar tarjeta
            </p>
          </button>
        }
      </div>
    </div>
  )
}
