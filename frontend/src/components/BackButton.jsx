import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const BackButton = () => {
  const navigate = useNavigate()

  const goBackPage = () => {
    navigate(-1)
  }

  return (
    <button onClick={goBackPage} className='top-4 rotate-180'><FaArrowLeft /></button>
  )
}
