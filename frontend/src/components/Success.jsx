import { PropTypes } from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { Button } from './Button'
import QR from '../assets/images/qr-code.svg'

const Success = ({ amount, name, qr }) => {
  const navigate = useNavigate()

  return (
    <section
      className={`w-full ${
        qr ? 'h-[70vh]' : 'h-[50vh]'
      }  flex justify-evenly items-center flex-col gap-[6rem]`}
    >
      {!qr ? (
        <>
          <div className="flex flex-col gap-5 justify-center items-center mt-24">
            <span className="rounded-full bg-green-500 w-20 h-20 flex items-center justify-center">
              <FaCheck className="text-white" />
            </span>
            <h2 className="text-xl font-bold font-mono">
              Envio realizado con éxito
            </h2>
            <p className="text-md text-gray-500 ">
              Enviaste ${amount} a {name}
            </p>
          </div>
          <Button
            func={() => navigate('/user/home')}
            nameClass="w-2/3 py-3 bg-sky-800 rounded-md text-white font-bold"
          >
            Volver al inicio
          </Button>
        </>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center px-3 gap-8">
          <h2 className="font-roboto text-2xl font-medium">
            Código para retirar el dinero
          </h2>
          <div className="w-80 h-[300px] flex flex-col justify-center items-center rounded-md gap-6  bg-[#4C27AE26]">
            <img src={QR} alt="código qr para realizar el retiro" />
            <p className="font-roboto font-semibold border border-black rounded-full py-2 px-7">
              Vence en 30 minutos
            </p>
          </div>
          <Button
            func={() => navigate('../home')}
            nameClass="w-80 py-3 bg-[#EE2B2B] rounded-full text-white font-roboto tracking-wider cursor-pointer"
          >
            Cancelar extracción
          </Button>
        </div>
      )}
    </section>
  )
}

Success.propTypes = {
  amount: PropTypes.number,
  name: PropTypes.string,
}

export default Success
