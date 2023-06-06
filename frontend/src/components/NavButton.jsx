import React from 'react'

export const NavAppTitle = ({ children, func, isOpen }) => {
  return (
    <button
      className={`p-3 w-full ${isOpen
        ? 'bg-transparent text-white md:text-3xl'
        : 'bg-white md:text-3xl'
        } flex rounded-[10px] items-center justify-center text-2xl font-roboto tracking-wide font-bold transition-all`}
      onClick={func}
    >
      {children}
    </button>
  )
}
