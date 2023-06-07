import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import { CreditCardComp } from '../components/CreditCardComp'
import {
  IoTrendingUp,
  IoTrendingDownOutline,
  IoEyeOutline,
  IoEyeOffOutline,
} from 'react-icons/io5'
import { useUserContext } from '../context/UserContext'
import { useState } from 'react'

export const Home = () => {
  const [showBalance, setshowBalance] = useState(false)
  const { user } = useUserContext()
  const { payload } = user
  console.log(payload)

  return (
    <>
      <section className="w-full h-[250px] bg-[#4C27AE26] shadow-first flex flex-col items-center">
        <p className="font-roboto mt-10">Disponible</p>
        <div className="w-[85%] h-auto flex items-center justify-center gap-x-6 mt-2 border-b pb-4 border-[#4C27AE4D]">
          <h3 className="text-5xl font-roboto font-bold tracking-wide">
            {showBalance ? '$100.000' : '********'}
          </h3>
          <span onClick={() => setshowBalance(!showBalance)}>
            {showBalance ? (
              <IoEyeOutline size={25} />
            ) : (
              <IoEyeOffOutline size={25} />
            )}
          </span>
        </div>

        <div className="w-full flex justify-center gap-x-6 mt-8">
          <Link
            to="../transfers"
            className="w-[150px] py-2.5 flex items-center justify-center gap-2 rounded-lg text-white font-inter bg-[#4C27AE]"
          >
            <IoTrendingUp size={20} />
            Transferir
          </Link>
          <Button nameClass="w-[150px] flex items-center justify-center gap-2 rounded-lg text-white font-inter bg-[#4C27AE]">
            <IoTrendingDownOutline size={20} />
            Retirar
          </Button>
        </div>
      </section>
      <section>
        {user ? (
          <CreditCardComp
            cardNumber={payload?.accountInfo?.dominoCard?.cardNumber}
            isDomino={true}
            name={`${payload?.profile?.fullName} ${payload?.profile?.lastName}`}
          />
        ) : (
          <p>Cargando tarjetas</p>
        )}
      </section>
    </>
  )
}
