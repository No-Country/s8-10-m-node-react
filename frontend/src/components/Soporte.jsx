import React from 'react'
import { useState } from 'react'
import ConfigurationOptions from './ConfigurationOptions'
import { ProfileImage } from './ProfileImage'
import { BackButton } from './BackButton'
import PanelBack from './PanelBack'
import { Fa500Px} from "react-icons/fa";


const Soporte = () => {
    const [optionData, setOptionData] = useState([{
        id: 1,
        name: 'Preguntas frecuentes',
        icon: Fa500Px,
        color: 'text-black-500'
       

    },
    {
        id: 2,
        name: 'Hablar con un soporte',
        icon:'',
        color: 'text-black-500'
    },
    {
        id: 3,
        name: 'Historial de reclamos',
        icon: '',
        color: 'text-black-500'
    },
  
])

  return (
    <div className='w-full '>
       <PanelBack name="Soporte" />
        <div className='mb-20 pb-20 mt-10'>

        <ProfileImage name={"name"}/>
        </div>
        {
            optionData.map((option) => {
               return <ConfigurationOptions key={option.id} option={option} />
            })

        }
    </div>
  )
}

export default Soporte