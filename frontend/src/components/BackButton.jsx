import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

export const BackButton = () => {
  const navigate = useNavigate()

  const goBackPage = () => {
    navigate('../user/home')
  }

  return (
    <button onClick={goBackPage}>
      <IoArrowBack size={25} />
    </button>
  )
}
