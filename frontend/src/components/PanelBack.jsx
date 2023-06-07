import React from 'react'
import { BackButton } from './BackButton'

const PanelBack = ({ name }) => {
  return (
    <div className="h-16 w-full pl-6 bg-white flex gap-5 items-center shadow-lg shadow-indigo-500/40">
      <BackButton />
      <h1 className="text-2xl font-bold font-roboto tracking-wide">{name}</h1>
    </div>
  )
}

export default PanelBack
