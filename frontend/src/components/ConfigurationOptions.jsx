import React from 'react';
import ArrowR from '../assets/images/ArrowR.svg';

const ConfigurationOptions = ({ option }) => {

  return (
    <div className='flex flex-col justify-between w-full pb-5 mb-3'>
      <div className='flex w-full justify-between'>
        <div className=  'flex gap-4'>
          <div className={option.color}>{option.icon}</div>
          <div className='flex flex-col'>
          <div className={option.color}>{option.name}</div>
          <span>{option.description}</span>

          </div>
        </div>
        <span className='flex items-center'>
          <img src={ArrowR} alt='Arrow Right' />
        </span>
      </div>
      <hr className='border-black w-full mt-2' />
    </div>
  );
};

export default ConfigurationOptions;