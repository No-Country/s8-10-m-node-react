import React from 'react'

export const ProfileImage = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center h-auto w-auto ">
      <div className="flex items-center justify-center h-24 w-24 rounded-full bg-gray-400">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
          alt="photo of user"
        />
      </div>
      <div className="flex text-center justify-center font-roboto text-3xl font-semibold pt-5 text-[#4C27AE]">
        {name}
      </div>
    </div>
  )
}
