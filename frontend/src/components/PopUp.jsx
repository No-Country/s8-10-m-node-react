import { PropTypes } from 'prop-types'
import { useEffect, useState } from 'react'

const PopUp = ({ message, setError }) => {
  const [showPopUp, setShowPopUp] = useState(false)

  useEffect(() => {
    if (message) {
      setShowPopUp(true)
      const timer = setTimeout(() => {
        setShowPopUp(false)
        setTimeout(() => {
          setError(false) // Limpia el error después de que finalice la animación
        }, 500)
      }, 2000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [message, setError])

  return (
    <div
      className={`absolute bottom-8 right-5 bg-red-500 shadow-lg py-2 px-6 text-white italic rounded-full transition-opacity duration-500 ${
        showPopUp ? 'opacity-100' : 'opacity-0 transition-opacity duration-500'
      }  pointer-events-none`}
    >
      <p>{message}</p>
    </div>
  )
}

PopUp.propTypes = {
  message: PropTypes.string.isRequired,
  setError: PropTypes.func,
}

export default PopUp
