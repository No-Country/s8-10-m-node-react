import { PropTypes } from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

const Success = ({ amount, name }) => {
  const navigate = useNavigate()

  return (
    <section className="w-full h-[50vh] flex justify-evenly items-center flex-col gap-[6rem]">
      <div className="flex flex-col gap-5 justify-center items-center mt-24">
        <span className="rounded-full bg-green-500 w-20 h-20 flex items-center justify-center">
          <FaCheck className='text-white'/>
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
        className="w-2/3 py-3 bg-sky-800 rounded-md text-white font-bold"
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
