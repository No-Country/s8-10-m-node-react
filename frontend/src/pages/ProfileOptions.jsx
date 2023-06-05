import React from 'react'
import { ProfileImage } from '../components/ProfileImage'

import OptionContainer from '../components/OptionContainer'

import PanelBack from '../components/PanelBack'


export const ProfileOptions = () => {
  // Contenido del componente Profile
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-center w-full h-auto gap-10 ">
      <PanelBack name="Perfil" />
   
      <div className="pt-16 pb-20">
        <ProfileImage name="Carlos Leiva" />
      </div>
      <OptionContainer />
    
    </div>
  )
}
