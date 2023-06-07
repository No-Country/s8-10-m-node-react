import React from 'react'
import { BackButton } from './BackButton'

const PanelBack = ({ name }) => {
  return (
    <div className="mt-5 pl-2 h-16 w-full bg-white border-t-2 border-b-2 flex gap-5 items-center shadow-lg shadow-indigo-500/40 ">
      <BackButton />
      <h1 className="text-2xl font-bold">{name}</h1>
    </div>
  )
}

export default PanelBack
