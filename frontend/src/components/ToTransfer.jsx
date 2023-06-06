import { PropTypes } from 'prop-types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import back from '../assets/images/back.svg'
import PopUp from './PopUp'
import Success from './Success'
import { useUserContext } from '../context/UserContext'

const ToTransfer = ({ setConfirm, close }) => {
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const {user}=useUserContext()
 const {payload}=user
 

  const validateAmount = (e) => {
    e.preventDefault()
    if (parseInt(amount) === 0 || parseInt(amount) > parseInt(payload.accountInfo.amount)) {
      setError(true)
    } else {
   
      if (parseInt(amount) <= parseInt(payload.accountInfo.amount)) {
        setShowSuccess(true)
      }
    }
  }

  const navigate = useNavigate()

  return (
    <section>
      {showSuccess ? (
        <Success amount={parseInt(amount)} name="Marcos Leiva" />
      ) : (
        <>
          <img
            className="ml-5 cursor-pointer relative -top-[120px]"
            src={back}
            alt="volver atras"
            onClick={() => {
              close()
              setConfirm(false)
              navigate(-1)
            }}
          />
          <form
            className="flex flex-col gap-3 w-full px-5 mx-auto"
            onSubmit={validateAmount}
          >
            <label className=" text-center text-xl " htmlFor="amount">
              Ingrese un monto
            </label>
            <input
              className="w-4/5 mx-auto text-center text-xl p-3 outline-none rounded-md bg-transparent italic"
              type="number"
              name="amount"
              placeholder="$ 200"
              onChange={(e) => setAmount(e.target.value)}
            />

            <button
              className="w-2/3 mx-auto mt-10 py-2 bg-green-600 rounded-md text-white text-lg font-semibold tracking-wide cursor-pointer"
              type="submit"
            >
              Enviar
            </button>
            {error && (
              <PopUp setError={setError} message="Ingresa un monto por favor" />
            )}
          </form>
        </>
      )}
    </section>
  )
}

ToTransfer.propTypes = {
  setConfirm: PropTypes.func,
  close: PropTypes.func,
}
export default ToTransfer
