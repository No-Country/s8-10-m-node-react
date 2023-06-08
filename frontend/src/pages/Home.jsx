import { Link, useRouteLoaderData } from 'react-router-dom'
import { CreditCardComp } from '../components/CreditCardComp'
import { IoTrendingUp, IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'
import { useState } from 'react'
import WithdrawCash from '../components/WithdrawCash'
import { formatCurrency } from '../utils/formatCurrency'
import { MovementsList } from '../components/MovementsList'
import { PayServicesLink } from '../components/PayServicesLink'
import { useUserContext } from '../context/UserContext';

export const Home = () => {
  const [showBalance, setshowBalance] = useState(false)
  const user = useRouteLoaderData('userLoggedIn')
  const { payload } = user
  const listMovements = payload?.movements.slice(0, 4)



  return (
    <article className="w-full flex flex-col gap-10 md:mt-5 min-[850px]:grid  md:grid-cols-auto md:gap-7 pb-4">
      <section className="w-full md:h-[200px] bg-tableRowColor md:bg-transparent md:shadow-none shadow-first flex md:flex-row md:flex-wrap md:gap-x-0 md:justify-center flex-col items-center gap-y-4 justify-center md:gap-x-5 py-6">
        <p className="font-roboto md:mt-0">Disponible</p>

        <div className="w-[85%] md:w-auto h-auto flex items-center justify-center gap-x-6 md:gap-x-5 mt-2 border-b pb-4 border-[#4C27AE4D] md:border-0">
          <h3 className="text-5xl font-roboto font-bold text-center tracking-wide min-w-[200px]">
            {showBalance ? formatCurrency(`${payload.accountInfo.amount}`) : '*****'}
          </h3>
          <span onClick={() => setshowBalance(!showBalance)}>
            {showBalance ? (
              <IoEyeOutline size={25} className="cursor-pointer" />
            ) : (
              <IoEyeOffOutline size={25} className="cursor-pointer" />
            )}
          </span>
        </div>

        <div className="w-full flex justify-center gap-x-6 mt-8 md:mt-0">
          <Link
            to="../transfers"
            className="w-[150px] py-2.5 flex items-center justify-center gap-2 rounded-lg text-white font-inter bg-[#4C27AE]"
          >
            <IoTrendingUp size={20} />
            Transferir
          </Link>
          <WithdrawCash />
        </div>
      </section>

      <section className="grid ml-10 min-[850px]:justify-center min-[850px]:items-center md:ml-10">
        <Link to="../mycards" className="font-roboto text-lg pl-2 mb-4">
          Mis tarjetas
        </Link>
        <div className="flex flex-wrap xl:flex-nowrap  gap-5">
          {user ? (
            <>
              <CreditCardComp
                key={payload?.accountInfo?.dominoCard?.cardNumber}
                cardNumber={payload?.accountInfo?.dominoCard?.cardNumber}
                isDomino={true}
                name={`${payload?.profile?.fullName} ${payload?.profile?.lastName}`}
              />
              {payload?.accountInfo?.associateCards?.map((card) => {
                return (
                  <CreditCardComp
                    key={card.cardNumber}
                    cardNumber={card.cardNumber}
                    isDomino={false}
                    name={card.holder}
                  />
                )
              })}
            </>
          ) : (
            <p>Cargando tarjetas</p>
          )}
        </div>
      </section>

      <section className="w-[90%] mx-auto col-span-2 lg:mt-10 flex items-center justify-center">
        {payload?.movements?.length > 0 ? (
          <MovementsList movements={listMovements} />
        ) : (
          <p>No hay movimientos en tu cuenta</p>
        )}
      </section>
      <section className="col-span-2 flex justify-center items-center mr-12 mb-10">
        <PayServicesLink />
      </section>
    </article>
  )
}
