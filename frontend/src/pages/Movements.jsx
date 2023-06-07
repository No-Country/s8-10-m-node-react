import React from 'react'
import { PageTitle } from './../components/PageTitle'
import { useRouteLoaderData } from 'react-router-dom'
import { MovementsList } from '../components/MovementsList'
import { PayServices } from '../components/PayServices'

export const Movements = () => {
  const { payload } = useRouteLoaderData('userLoggedIn')

  const moves = payload.movements

  return (
    <div className='flex flex-col gap-4 h-full py-4'>
      <PageTitle>
        Movimientos
      </PageTitle>
      <div className='w-full flex flex-col items-center justify-center gap-12'>
        <MovementsList movements={moves} />
        <PayServices />
      </div>
    </div >
  )
}
