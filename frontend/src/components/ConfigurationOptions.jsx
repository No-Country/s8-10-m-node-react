import React, { useState } from 'react';
import ArrowR from '../assets/images/ArrowR.svg';
import { useNavigate } from 'react-router-dom';
import { Modal } from './Modal';
import { useUserContext } from '../context/UserContext'



const ConfigurationOptions = ({ option }) => {
  const { logout } = useUserContext();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (option.name === 'Datos personales') {
     navigate('/user/perfil');
    } else if (option.name == 'Terminos y condiciones') {
      
      setShowPopup(true);
    } else if (option.name === 'Politica de privacidad') {
      setShowPopup(true);
    } else if (option.name === 'Cerrar sesión') {
      logout();
      
    
    }else if (option.name === 'Soporte') {
      navigate('/user/soporte');
    }
  };
const handlePopUp = () => {
  setShowPopup(false);
}

  return (
    <div className='flex flex-col justify-between w-full pb-5 mb-3 ml-2 pr-3'>
      <div className='flex w-full justify-between'>
        <div className='flex gap-4'>
          <div className={option.color}>{option.icon}</div>
          <div className='flex flex-col'>
            <div className={option.color} onClick={handleClick}>
              {option.name}
            </div>
            <span>{option.description}</span>
          </div>
        </div>
        <span className='flex items-center'>
          <img src={ArrowR} alt='Arrow Right' />
        </span>
      </div>
      <hr className='border-black w-full mt-2' />
      <div onClick={handlePopUp} >

      {showPopup && <Modal children={"loren ipsun texto de relleno aqui ok estamos rellenando"} 
      
      />
      
      
    }
    </div>

    </div>
  );
};

export default ConfigurationOptions;
