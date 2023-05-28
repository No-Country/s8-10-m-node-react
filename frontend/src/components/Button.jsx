import React from 'react'

export const Button = ({ children, className }) => {
  return (
    <button className={` rounded-md w-full sm:w-96 py-3 px-12 flex items-center shadow-md gap-8 ${className}`}>
      {children}
    </button>
  )
}
