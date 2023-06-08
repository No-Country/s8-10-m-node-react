import React from 'react'
import { PageTitle } from './../components/PageTitle'
import { useRouteLoaderData } from 'react-router-dom'
import { MovementsList } from '../components/MovementsList'
import { PayServicesLink } from '../components/PayServicesLink'
import { TbFaceIdError } from 'react-icons/tb'

export const loader = () => { }

export const Movements = () => {
  const { payload } = useRouteLoaderData('userLoggedIn')

  const moves = payload.movements

  return (
    <section className="w-full h-full flex flex-col lg:justify-center lg:items-center gap-12 py-4 px-5">
      <PageTitle>Movimientos</PageTitle>
      <div className="w-full flex flex-col items-center  justify-center gap-12">
        {moves.length > 0 ? (
          <MovementsList movements={moves} />
        ) : (
          <span className="flex items-center gap-2">
            <TbFaceIdError className="h-6 w-6" />
            <h3 className="text-center text-xl">No tiene movimientos hechos</h3>
          </span>
        )}
        <PayServicesLink />
      </div>
    </section>
  )
}
