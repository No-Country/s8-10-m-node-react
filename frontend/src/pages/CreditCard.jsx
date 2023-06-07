import React, { useEffect, useState } from 'react'
import { CreditCardComp } from '../components/CreditCardComp'
import { TogglePill } from '../components/TogglePill'
import { FaAngleDoubleRight, FaTrash } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'
import { getCreditCardInfo } from '../services/creditCard'

export const loader = async ({ params, request }) => {
  const creditCardId = params.creditCardId
  const data = await getCreditCardInfo(creditCardId)
  const isDomino = new URL(request.url).searchParams.get('domino')
  console.log(isDomino)
  return { data, isDomino }
}

export const CreditCard = () => {
  const { data, isDomino } = useLoaderData()
  return (
    <>
      <PageTitle>Tarjetas</PageTitle>
      <CreditCardComp cardNumber={data.cardNumber} isDomino={isDomino} />
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
      {/* {windowWidth > 480 ? <p>Estamos en desktop o tablet</p> : <p>Estamos en mobile</p>} */}
    </>
  )
}
