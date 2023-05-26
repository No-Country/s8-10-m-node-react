import React from 'react'
import { ArrowRightSVG } from '../utils/icons'
import { useNavigate } from 'react-router-dom'

export const BackButton = () => {
  const navigate = useNavigate()

  const goBackPage = () => {
    navigate(-1)
  }

  return (
    <button onClick={goBackPage} className='absolute top-4 left-4 rotate-180'><ArrowRightSVG /> </button>
  )
}
