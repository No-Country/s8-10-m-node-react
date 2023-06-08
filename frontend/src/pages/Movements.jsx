import React from 'react'
import { PageTitle } from './../components/PageTitle'
import { useRouteLoaderData } from 'react-router-dom'
import { MovementsList } from '../components/MovementsList'
import { PayServicesLink } from '../components/PayServicesLink'
import { TbFaceIdError } from "react-icons/tb"

export const loader = () => {

}

export const Movements = () => {
  const { payload } = useRouteLoaderData('userLoggedIn')

  const moves = payload.movements

  return (
    <div className='flex flex-col gap-4 h-full py-8 md:py-4'>
      <PageTitle>
        Movimientos
      </PageTitle>
      <div className='w-full flex flex-col items-center justify-center gap-12'>
        {moves.length > 0 ?
          <MovementsList movements={moves} /> :
          <span className='flex items-center gap-2'>
            <TbFaceIdError className='h-6 w-6' />
            <h3 className='text-center text-xl'>
              No tiene movimientos hechos</h3>
          </span>}
        <PayServicesLink />
      </div>
    </div >
  )
}
