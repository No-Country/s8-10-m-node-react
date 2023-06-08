import React from 'react'
import { ProfileImage } from '../components/ProfileImage'
import { useUserContext } from '../context/UserContext';
import OptionContainer from '../components/OptionContainer'



export const ProfileOptions = () => {
  const { user } = useUserContext();
 

  // Contenido del componente Profile
  return (
    <div className="flex flex-col items-center sm:flex-col sm:justify-center w-full h-auto gap-10 mx-auto">
    <div className="pt-16 pb-20">
      <ProfileImage name={`${user.payload.profile.fullName} ${user.payload.profile.lastName}`} />
    </div>
    <OptionContainer />
  </div>
  )
}
