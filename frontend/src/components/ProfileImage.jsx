import React from 'react'

export const ProfileImage = ({name}) => {
    return (
        <div className='flex flex-col items-center justify-center h-auto w-auto '>

        <div className="flex items-center justify-center h-24 w-24 rounded-full bg-gray-400">
            <span className="text-white text-2xl font-bold">JD</span>
        </div>
            <div className='flex text-center justify-center font-roboto text-2xl font-medium pt-5'>{name}</div>
        </div>
    )
}

