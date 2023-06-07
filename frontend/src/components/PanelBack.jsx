import React from 'react'
import { BackButton } from './BackButton'
import { useLocation } from 'react-router-dom'
import { PAGE_NAMES } from '../utils/pageNames'

const PanelBack = ({ name }) => {
  const location = useLocation()
  console.log(location)
  const pageName = location.pathname.split('/').slice(-1)[0]
  console.log({ pageName })
  return (
    <div className="w-full p-6 bg-white md:bg-transparent flex gap-5 items-center shadow-lg shadow-indigo-500/40 md:shadow-none">
      <BackButton />
      <h1 className="text-2xl font-bold font-roboto tracking-wide capitalize">{PAGE_NAMES[pageName]}</h1>
    </div>
  )
}

export default PanelBack
