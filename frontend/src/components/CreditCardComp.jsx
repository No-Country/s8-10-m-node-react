import { detectCardType } from '../utils/detectCardType'
import { formatCreditCardNumber } from '../utils/formatCreditCardNumber'
import { creditCardBgImg } from '../utils/creditCardBgImg'

export const CreditCardComp = ({ cardNumber, isDomino, name }) => {
  const variant = isDomino ? 'domino' : detectCardType(cardNumber)

  const cardStyle = {
    backgroundImage: `url(${creditCardBgImg[variant]})`,
    backgroundSize: 'cover',
    aspectRatio: 1.69 / 1,
    color: `${variant === 'domino' ? 'white' : 'black'}`,
  }

  const numberToShow = formatCreditCardNumber(cardNumber)

  return (
    <article
      className={`rounded-[30px] max-w-[385px] min-w-[300px] text-xl relative overflow-hidden font-inter shadow-lg`}
      style={cardStyle}
    >
      <div className="h-full w-full flex flex-col justify-end py-5 px-8">
        <div className="flex justify-between [&>*>p]:z-[1]">
          <span className=" uppercase font-roboto flex flex-col justify-center gap-0 text-xs">
            <p className="w-full my-0 truncate font-bold">{name}</p>
            <p className="truncate my-0 tracking-widest font-bold">
              {numberToShow}
            </p>
          </span>
        </div>
      </div>
    </article>
  )
}
