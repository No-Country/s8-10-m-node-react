import React from 'react'
import { ProfileImage } from '../components/ProfileImage'
import { useUserContext } from '../context/UserContext'
import OptionContainer from '../components/OptionContainer'

export const Configuration = () => {
  const { user } = useUserContext()

  return (
    <div className="flex max-w-3xl flex-col items-center sm:flex-col sm:justify-center w-full h-auto gap-7 mx-auto">
      <div className="pt-16 pb-20">
        <ProfileImage
          name={`${user.payload.profile.fullName} ${user.payload.profile.lastName}`}
        />
      </div>
      <OptionContainer />
    </div>
  )
}
