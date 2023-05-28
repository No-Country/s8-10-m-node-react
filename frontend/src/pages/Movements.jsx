import React from 'react'
import { PageTitle } from './../components/PageTitle'

export const Movements = () => {
  const fechaHoy = Date.now()
  const movements = [
    {
      id: 1,
      done: true,
      description: 'Pago',
      amount: 20560,
      date: fechaHoy
    },
    {
      id: 2,
      done: true,
      description: 'Recarga',
      amount: 200,
      date: fechaHoy
    },
    {
      id: 3,
      done: true,
      description: 'Transferencia Diego Correa',
      amount: 22560,
      date: fechaHoy
    },
    {
      id: 3,
      done: false,
      description: 'Heladera',
      amount: 201560,
      date: fechaHoy
    }
  ]

  const formatDate = (date) => new Intl.DateTimeFormat('es-AR').format(date)

  const formatCurrency = (amount) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount)

  return (
    <>
      <PageTitle>
        Movements
      </PageTitle>
      <h3 className='w-full font-semibold text-lg'>Ultimos movimientos</h3>
      <div className='w-full flex flex-col gap-2 '>
        {movements.map((movement) => {
          return (
            <div className='flex gap-2 items-center justify-between w-full text-sm text-left' key={movement.id}>
              <span className='rounded-full border border-black w-6 h-6 flex items-center justify-center text-xs'>{movement.done ? 'V' : 'X'}</span>
              <span className='truncate w-full flex-1 [&>p]:truncate'>
                <p className='font-bold uppercase'>{movement.description}</p>
                <p className='text-xs text-[10px]'>{formatDate(movement.date)}</p>
              </span>
              <p className='font-bold text-base'>
                {formatCurrency(movement.amount)}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}
