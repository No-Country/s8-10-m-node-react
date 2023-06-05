import React from 'react'
import { PageTitle } from './../components/PageTitle'
import { FaDollarSign } from 'react-icons/fa'
import { Link, useRouteLoaderData } from 'react-router-dom'
import servicesBot from '../assets/images/servicesBotCompressed.png'

export const Movements = () => {
  const { payload } = useRouteLoaderData('userLoggedIn')
  console.log(payload)

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
      id: 4,
      done: false,
      description: 'Heladera',
      amount: 201560,
      date: fechaHoy
    }
  ]

  const formatDate = (date) => new Intl.DateTimeFormat('es-AR').format(date)

  const formatCurrency = (amount) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount)

  function handleSubmit (e) {
    e.preventDefault()
    console.log(event.target.value)
  }

  return (
    <div className='flex flex-col gap-4 h-full'>
      <PageTitle>
        Movimientos
      </PageTitle>
      <div className='w-full flex flex-col items-center justify-center gap-12'>
        <form onSubmit={handleSubmit} className='flex justify-center w-full'>
          <label htmlFor='ultimos movimientos'>
            <input className='px-1 py-2 w-80 border-tableHeadColor border-2 rounded-md text-primary text-lg font-medium' placeholder='Buscar' />
          </label>
        </form>
        <div className='grid grid-cols-movementsTable w-[80%] items-stretch gap-x-0 gap-y-2 [&>*]:p-2'>
          <h5 className='bg-tableHeadColor rounded-l-md text-left'>Nombre</h5>
          <h5 className='bg-tableHeadColor text-center'>Tipo</h5>
          <h5 className='bg-tableHeadColor text-center'>Fecha</h5>
          <h5 className='bg-tableHeadColor rounded-r-md text-right'>Monto</h5>
          {movements.map((movement) => {
            return (
              <>
                <span className='bg-tableRowColor rounded-l-md flex justify-center'>
                  <span className='rounded-full border-2 border-primary w-6 h-6 flex items-center justify-center text-xs'><FaDollarSign fill='#4C27AE' /></span>
                </span>
                <span className='flex justify-center w-full h-full bg-tableRowColor'>
                  <p className=' '>{movement.description}</p>
                </span>
                <span className='flex justify-center w-full h-full bg-tableRowColor'>
                  <p className=''>{formatDate(movement.date)}</p>
                </span>
                <span className='flex justify-end w-full h-full bg-tableRowColor rounded-r-md'>
                  <p>
                    {formatCurrency(movement.amount)}
                  </p >
                </span>
              </>
            )
          })}
        </div>
        <Link to='/user/services' className='justify-self-end h-full w-[80%] bg-primary rounded-md p-4 text-white flex justify-center items-center'>
          <img src={servicesBot} className='h-32' />
          <span className='flex flex-col gap-2 text-center lg:text-left'>
            <p className='text-3xl md:text-4xl lg:text-5xl font-semibold'>PAGAR OTROS SERVICIOS</p>
            <p className='text-base md:text-[20px] font-semibold'>PAGA AQUI TODO LO QUE QUIERAS</p>
          </span>
        </Link>
      </div>
    </div >
  )
}
