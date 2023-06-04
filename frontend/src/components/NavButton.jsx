import React from 'react'

export const NavAppTitle = ({ children, onClick }) => {
  return (
    <button className='p-3 w-full bg-white flex rounded-[10px] items-center justify-center text-2xl font-bold' onClick={onClick}>
      {children}
    </button>
  )
}