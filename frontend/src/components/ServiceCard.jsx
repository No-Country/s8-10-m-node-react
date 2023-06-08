import React from 'react'
import { Link } from 'react-router-dom'

export const ServiceCard = ({ service }) => {
  return (
    <span className="border-primary shadow-lg bg-white shadow-tableRowColor border-[1px] h-52 w-40 rounded-lg py-2 px-4 flex flex-col items-center justify-between">
      <span
        className={`${
          service.bgColor
            ? service.bgColor
            : 'bg-gradient-to-b from-black to-slate-800'
        } aspect-square rounded-lg w-full flex items-center justify-center p-4`}
      >
        <img src={service.svg} />
      </span>
      <h3 className="font-bold text-center">{service.name}</h3>
      <Link
        to={`${service.path}`}
        className="text-xs py-1 px-4 bg-primary rounded-xl w-full font-medium text-white text-center"
      >
        Pagar
      </Link>
    </span>
  )
}
