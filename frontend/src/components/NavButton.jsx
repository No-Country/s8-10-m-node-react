import React from 'react'

export const NavAppTitle = ({ children, func, isOpen }) => {
  return (
    <button
      className={`p-3 w-full ${
        isOpen
          ? 'bg-transparent text-white md:text-4xl'
          : 'bg-white md:text-2xl'
      } flex rounded-[10px] items-center justify-center text-2xl font-roboto tracking-wide `}
      onClick={func}
    >
      {children}
    </button>
  )
}
