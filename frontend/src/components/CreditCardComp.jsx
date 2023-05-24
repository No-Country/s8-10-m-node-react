import React from 'react'
import { detectCardType } from '../utils/detectCardType'
import { formatCreditCardNumber } from '../utils/formatCreditCardNumber'
import { bgGradient } from '../utils/creditCardStyles'
import { AmexSVG, DoubleArrowSVG, MasterCardSVG } from '../utils/icons'
import { Link } from 'react-router-dom'

export const CreditCardComp = ({ height, cardNumber }) => {
  const variant = detectCardType(cardNumber)

  const cardHeight = height < 120 ? 120 : height

  const width = '340px'

  const iconSVG = {
    visa: <p>VISA</p>,
    amex: <p>AMEX</p>,
    masterCard: <MasterCardSVG />
  }

  const detail1 = {
    visa: { height: '200px', width: '200px', bottom: `${cardHeight / 4}px`, right: `${cardHeight / -3}px`, borderRadius: '9999px', filter: 'blur(2px)' },
    masterCard: { height: width, width, top: `${cardHeight - 25}px`, left: `${cardHeight / -3}px`, transform: 'rotate(45deg)' },
    amex: { height: width, width, top: `${cardHeight / 2}px`, left: `${cardHeight / 2}px`, filter: 'blur(2px)' }
  }

  const detail2 = {
    visa: { height: '200px', width: '200px', bottom: `${cardHeight / -5}px`, right: `${cardHeight / -2}px`, borderRadius: '9999px', filter: 'blur(2px)' },
    masterCard: { height: width, width, top: `${cardHeight}px`, left: `${cardHeight / 3}px`, transform: 'rotate(45deg)' },
    amex: { height: width, width, top: '0px', left: '-70px', filter: 'blur(2px)' }
  }

  const heightStyle = { height: `${cardHeight}px` }

  const numberToShow = formatCreditCardNumber(cardNumber)

  return (
    <article className={`w-[340px]  rounded-xl ${bgGradient[variant]} text-xl relative overflow-hidden font-inter`} style={heightStyle}>
      <div className='h-full w-full flex flex-col justify-between p-[20px] relative'>
        <span className='text-white text-[8px] uppercase flex justify-between px-2'>
          <h3>Credit</h3>
          {iconSVG[variant]}
        </span>
        <div className='flex justify-between'>
          <span className='text-white uppercase  font-roboto flex flex-col justify-center gap-0 text-xs'>
            <p className='w-full my-0 truncate'>VALENTIN GONZALEZ TRAPAGA</p>
            <p className='truncate my-0 tracking-widest'>{numberToShow}</p>
          </span>
          <span className='cursor-pointer z-10'>
            <Link to={`/mycards/${cardNumber}`}>
              <DoubleArrowSVG />
            </Link>
          </span>
        </div>
      </div>
      <div className='inline-block absolute w-full bg-white opacity-30' style={detail1[variant]} />
      <div className='inline-block absolute w-full bg-white opacity-10' style={detail2[variant]} />
    </article>
  )
}
