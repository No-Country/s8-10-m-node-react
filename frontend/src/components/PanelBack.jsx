import React from 'react'
import { BackButton } from './BackButton'
import { useLocation } from 'react-router-dom'
import { PAGE_NAMES } from '../utils/pageNames'

const PanelBack = () => {
  const location = useLocation()
  const pageName = location.pathname.split('/').slice(-1)[0]
  return (
    <div className="w-full p-6 bg-white md:bg-transparent text-primary flex gap-5 items-center shadow-lg shadow-indigo-500/40 md:shadow-none">
      <BackButton />
      <h1 className="text-2xl font-bold font-roboto tracking-wide capitalize">
        {PAGE_NAMES[pageName]}
      </h1>
    </div>
  )
}

export default PanelBack
