import React from 'react'
import { detectCardType } from '../utils/detectCardType'
import { formatCreditCardNumber } from '../utils/formatCreditCardNumber'
import { bgGradient } from '../utils/creditCardStyles'
import { CardDetailSVG, DoubleArrowSVG, MasterCardSVG } from '../utils/icons'
import { Link } from 'react-router-dom'

export const CreditCardComp = ({ height, cardNumber, isDomino, name }) => {
  const variant = isDomino ? 'domino' : detectCardType(cardNumber)

  const cardHeight = height < 120 ? 120 : height

  const width = '340px'

  const iconSVG = {
    visa: <p>VISA</p>,
    domino: <p>DOMINO</p>,
    masterCard: <MasterCardSVG />
  }

  const detail1 = {
    visa: { height: '200px', width: '200px', bottom: `${cardHeight / 4}px`, right: `${cardHeight / -3}px`, borderRadius: '9999px', filter: 'blur(2px)' },
    masterCard: { height: width, width, top: `${cardHeight - 25}px`, left: `${cardHeight / -3}px`, transform: 'rotate(45deg)' },
    domino: { height: width, width, top: `${cardHeight / 2}px`, left: `${cardHeight / 2}px`, filter: 'blur(2px)' }
  }

  const detail2 = {
    visa: { height: '200px', width: '200px', bottom: `${cardHeight / -5}px`, right: `${cardHeight / -2}px`, borderRadius: '9999px', filter: 'blur(2px)' },
    masterCard: { height: width, width, top: `${cardHeight}px`, left: `${cardHeight / 3}px`, transform: 'rotate(45deg)' },
    domino: { height: width, width, top: '0px', left: '-70px', filter: 'blur(2px)' }
  }

  const heightStyle = { height: `${cardHeight}px` }

  const numberToShow = formatCreditCardNumber(cardNumber)

  return (
    <article className={`rounded-xl ${bgGradient[variant]} min-w-[240px] max-w-sm text-xl relative overflow-hidden font-inter shadow-lg w-full`} style={heightStyle}>
      <div className='h-full w-full flex flex-col justify-between p-[20px] relative'>
        <span className='text-white text-[8px] uppercase flex justify-between px-2'>
          <h3>Credit</h3>
          {iconSVG[variant]}
        </span>
        <div className='flex justify-between [&>*>p]:z-[1]'>
          <span className='text-white uppercase font-roboto flex flex-col justify-center gap-0 text-xs'>
            <p className='w-full my-0 truncate font-bold'>{name}</p>
            <p className='truncate my-0 tracking-widest font-bold'>{numberToShow}</p>
          </span>
          <span className='cursor-pointer z-[1]'>
            <Link to={`user/mycards/${cardNumber}`}>
              <DoubleArrowSVG />
            </Link>
          </span>
        </div>
      </div>
      {variant !== 'nocard'
        ? (
          <>
            <div className='inline-block absolute w-full bg-white opacity-30' style={detail1[variant]} />
            <div className='inline-block absolute w-full bg-white opacity-10' style={detail2[variant]} />
          </>
        )
        : (<span className='absolute -bottom-4 w-full'><CardDetailSVG /></span>)}
    </article>
  )
}
