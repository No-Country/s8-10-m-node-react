import React from 'react'
import { BackButton } from './BackButton'

const PanelBack = ({ name }) => {
  return (
    <div className="w-full p-6 bg-white md:bg-transparent flex gap-5 items-center shadow-lg shadow-indigo-500/40 md:shadow-none">
      <BackButton />
      <h1 className="text-2xl font-bold font-roboto tracking-wide">{name}</h1>
    </div>
  )
}

export default PanelBack
