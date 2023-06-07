import { FaCheckCircle } from 'react-icons/fa'
import { FaExclamationCircle } from 'react-icons/fa'

import React from 'react'

export const MovementsList = ({ movements }) => {

  const formatDate = (date) => new Intl.DateTimeFormat('es-AR').format(date)

  return (
    <div className='grid grid-cols-movementsTable w-full sm:w-[80%] items-stretch gap-x-0 gap-y-2 [&>*]:p-2 [&>*]:sm:text-base [&>*]:text-xs'>
      <h5 className='bg-tableHeadColor sm:rounded-l-md text-left'>Nombre</h5>
      <h5 className='bg-tableHeadColor text-center'>Descripcion</h5>
      <h5 className='bg-tableHeadColor text-center'>Fecha</h5>
      <h5 className='bg-tableHeadColor sm:rounded-r-md text-right'>Monto</h5>
      {movements.map((movement) => {
        return (
          <>
            <span className='bg-tableRowColor sm:rounded-l-md flex justify-center truncate items-center'>
              {movement.status === 'APPROVED' ? <FaCheckCircle fill='#4C27AE' /> : <FaExclamationCircle fill='#4C27AE' />}
            </span>
            <span className='flex justify-center w-full h-full bg-tableRowColor'>
              <p className='text-center'>{movement.subject}</p>
            </span>
            <span className='flex justify-center w-full h-full bg-tableRowColor'>
              <p className='truncate'>{formatDate(movement.date)}</p>
            </span>
            <span className='flex justify-end w-full h-full bg-tableRowColor sm:rounded-r-md'>
              <p>
                {movement.amount}
              </p >
            </span>
          </>
        )
      })}
    </div>
  )
}
