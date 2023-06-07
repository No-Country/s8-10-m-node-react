import React, { useState } from 'react'

export const TogglePill = () => {
  const [toggle, setToggle] = useState(false)

  function togglePause () {
    setToggle(prevToggle => !prevToggle)
  }

  const bgColor = toggle ? 'bg-primary' : 'bg-slate-500'

  return (
    <div className={`w-[34px] h-5 relative rounded-full p-2 ${bgColor} cursor-pointer transition-colors duration-300`} onClick={togglePause}>
      <span className={`w-[14px] h-[14px] bg-white absolute top-[3px] ${toggle ? 'translate-x-[10px]' : '-translate-x-[5px]'} rounded-full transition duration-300 ease-in-out`} />
    </div>
  )
}
