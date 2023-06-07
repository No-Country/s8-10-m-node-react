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

  return (
    <>
      <PageTitle>Tarjetas</PageTitle>
      <CreditCardComp cardNumber={card.cardNumber} isDomino={isDomino} />
      <div className="flex flex-col w-full gap-2 font-medium font-roboto px-2">
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
        <button className="bg-[#42ADD5] text-white">
          <FaTrash />
          <p className="font-medium text-center text-lg w-[70%]">
            Eliminar tarjeta
          </p>
        </button>
      </div>
    </>
  )
}
