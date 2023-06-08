import React from 'react'
import { CreditCardComp } from '../components/CreditCardComp'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'


export const CreditCardWithLink = ({ cardNumber, cardName, isDomino }) => {
  return (
    <span className='flex items-center gap-2'>
      <CreditCardComp cardNumber={cardNumber} name={cardName} isDomino={isDomino} />
      <Link
        to={`/user/mycards/${cardNumber}${isDomino ? '?domino=true' : ''}`}
      >
        <FaAngleRight fill='##4C27AE' className='h-6' />
      </Link>
    </span>
  )
}
