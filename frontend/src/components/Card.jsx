import React from 'react'

export const Card = ({ height, cardNumber }) => {
  function detectCardType (cardNumber) {
    const cleanedNumber = cardNumber.replace(/\D/g, '')

    const cardPatterns = {
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      masterCard: /^5[1-5][0-9]{14}$/,
      amex: /^3[47][0-9]{13}$/
    }

    for (const cardType in cardPatterns) {
      if (cardPatterns[cardType].test(cleanedNumber)) {
        return cardType
      }
    }
    return 'nocard'
  }

  function formatCreditCardNumber (number) {
    const parts = number.match(/[\s\S]{1,4}/g)
    return parts.join(' ● ')
  }

  const variant = detectCardType(cardNumber)

  const cardHeight = height < 120 ? 120 : height

  const width = '340px'

  const bgGradient = {
    nocard: 'bg-gradient-to-r from-red-700 to-red-500',
    visa: 'bg-gradient-to-r from-[#012340] to-[#4148C4]',
    masterCard: 'bg-gradient-to-r from-emerald-500 to-[#0AA46B]',
    amex: 'bg-gradient-to-r from-gray-900 to-slate-800'
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
      <div className='h-full w-full flex flex-col justify-between p-[20px]'>
        <span className='text-white text-[8px] uppercase flex justify-between px-2'>
          <h3>Credit</h3>
          <p>{variant}</p>
        </span>
        <span className='text-white uppercase  font-roboto flex flex-col justify-center gap-0 text-xs'>
          <p className='w-full my-0 truncate'>VALENTIN GONZALEZ TRAPAGA</p>
          <p className='truncate my-0 tracking-widest'>{numberToShow}</p>
        </span>
      </div>
      <div className='inline-block absolute w-full bg-white opacity-30' style={detail1[variant]} />
      <div className='inline-block absolute w-full bg-white opacity-10' style={detail2[variant]} />
    </article>
  )
}
