import React from 'react'
import { ProfileImage } from '../components/ProfileImage'

import OptionContainer from '../components/OptionContainer'
import PersonalData from '../components/PersonalData'

export const ProfileOptions = () => {
  // Contenido del componente Profile
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-center w-full h-auto gap-10 ">
      <div className="pt-16 pb-20">
        <ProfileImage name="Carlos Leiva" />
      </div>
      <OptionContainer />
    
    </div>
  )
}
