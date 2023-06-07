import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

export const BackButton = () => {
  const navigate = useNavigate()

  const goBackPage = () => {
    navigate(-1)
  }

  return (
    <button onClick={goBackPage} className="top-4  rotate-180">
      <IoArrowBack />
    </button>
  )
}