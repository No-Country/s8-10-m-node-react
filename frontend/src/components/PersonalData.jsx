import React from 'react'
import { useState } from 'react'
import ConfigurationOptions from './ConfigurationOptions'
import { ProfileImage } from './ProfileImage'


const PersonalData = () => {
    const [optionData, setOptionData] = useState([{
        id: 1,
        name: 'MI CBU',
        description: '1234567891234567891234',
        icon: null,
        color: 'text-black-500'
       

    },
    {
        id: 2,
        name: 'ALIAS',
        description: 'MARTIN LEIVA',
        icon:null,
        color: 'text-black-500'
    },
    {
        id: 3,
        name: 'CUIT',
        description: '20-12345678-5',
        icon: null,
        color: 'text-black-500'
    },
    {
        id: 4,
        name: 'NUMERO DE CUENTA',
        description: '1234567891234567891234',
        icon: null,
        color: 'text-black-500'
    },
    {
        id: 5,
        name: 'TODOS LOS DATOS BANCARIOS',
        description: 'Datos bancarios',
        icon: null,
        color: null
    },

])

  return (
    <div className='w-full '>
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

export default PersonalData