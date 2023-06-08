import React from 'react'
import { useState } from 'react'
import ConfigurationOptions from './ConfigurationOptions'
import config from '../assets/images/config.svg'
import Data from '../assets/images/Data.svg'
import message from '../assets/images/message.svg'
import security from '../assets/images/security.svg'
import luna from '../assets/images/luna.svg'
import term from '../assets/images/term.svg'
import cerrar from '../assets/images/cerrar.svg'

const OptionContainer = () => {
    const [optionData, setOptionData] = useState([{
        id: 1,
        name: 'Datos personales',
        icon: <img src={Data} alt="Data" />,
        color: 'text-black-500'
       

    },
    {
        id: 2,
        name: 'Soporte',
        icon: <img src={message} alt="Data" />,
        color: 'text-black-500'
    },
    {
        id: 3,
        name: 'Seguridad',
        icon: <img src={security} alt="Data" />,
        color: 'text-black-500'
    },
    {
        id: 4,
        name: 'Activar Modo Oscuro ',
        icon: <img src={luna} alt="Data" />,
        color: 'text-black-500'
    },
    {
        id: 5,
        name: 'Terminos y condiciones',
        icon: <img src={term} alt="Data" />,
        color: "text-black-500"
    },
    {
        id: 6,
        name: 'Politica de privacidad',
        icon: <img src={term} alt="Data" />,
        color: 'text-black-500'
    },
    {
        id: 7,
        name: 'Cerrar sesión',
        icon: <img src={cerrar} alt="Data" />,
        color: 'text-red-500'
    },

])

  return (
    <div className='w-full '>
        {
            optionData.map((option) => {
               return <ConfigurationOptions key={option.id} option={option} />
            })

        }
    </div>
  )
}

export default OptionContainer