import React, { useEffect, useState } from 'react'
import { CreditCardComp } from '../components/CreditCardComp'
import { Button } from '../components/Button'
import { TogglePill } from '../components/TogglePill'
import { ArrowRightSVG, DeleteSVG } from '../utils/icons'
import { useParams } from 'react-router-dom'

export const MyCreditCard = () => {
  const { creditCardId } = useParams()
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth
  //     setWindowWidth(width)
  //   }

  //   // Attach event listener to monitor resize
  //   window.addEventListener('resize', handleResize)

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  return (
    <main className='mx-auto bg-slate-100 w-96 flex flex-col items-center min-h-screen p-4 gap-4 text-[#2E4355] font-roboto'>
      <p className='w-full'>Home / Tarjetas / Mi tarjeta</p>
      <CreditCardComp height={180} cardNumber={creditCardId} />
      <div className='flex flex-col w-full gap-2 font-medium font-roboto px-4'>
        <div className='flex w-full items-center justify-between'>
          <p>Pausar tarjeta</p>
          <TogglePill />
        </div>
        <div className='flex w-full items-center justify-between'>
          <p>Cambiar PIN cajero</p>
          <span className='cursor-pointer'>
            <ArrowRightSVG />
          </span>
        </div>
        <div className='flex w-full items-center justify-between'>
          <p>Denunciar</p>
          <span className='cursor-pointer'>
            <ArrowRightSVG />
          </span>
        </div>
      </div>
      <Button className='bg-[#42ADD5] text-white'>
        <DeleteSVG />
        <p className='font-medium text-center text-lg w-[70%]'>Eliminar tarjeta</p>
      </Button>
      {/* {windowWidth > 480 ? <p>Estamos en desktop o tablet</p> : <p>Estamos en mobile</p>} */}
    </main>
  )
}
