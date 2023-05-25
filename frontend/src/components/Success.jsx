import { PropTypes } from 'prop-types'
import check from '../assets/images/checkmark.svg'
import { useNavigate } from 'react-router-dom'

const Success = ({ amount, name }) => {
  const navigate = useNavigate()

  return (
    <section className="w-full h-[50vh] flex justify-evenly items-center flex-col gap-[6rem]">
      <div className="flex flex-col gap-4 justify-center items-center mt-24">
        <span className="rounded-full bg-green-500 w-16 h-16 flex items-center justify-center">
          <img src={check} alt="marca de verificación " />
        </span>
        <h2 className="text-xl font-bold font-mono">
          Envio realizado con éxito
        </h2>
        <p className="text-md text-gray-500 ">
          Enviaste ${amount} a {name}
        </p>
      </div>
      <button
        onClick={() => navigate('/transfers')}
        className="w-2/3 h-12 bg-sky-800 rounded-md text-white font-bold"
      >
        Volver al inicio
      </button>
    </section>
  )
}

Success.propTypes = {
  amount: PropTypes.number,
  name: PropTypes.string,
}

export default Success
