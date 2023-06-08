import React, { useState } from 'react'
import InputField from './../components/InputField';
import { associateCard } from '../services/associateCard';
import { useRouteLoaderData, redirect } from 'react-router-dom';

export const AssociateCard = () => {
  const [cvv, setCvv] = useState('')
  const [cardType, setCardType] = useState('')
  const [titular, setTitular] = useState('')
  const [numero, setNumero] = useState('')
  const [error, setError] = useState('')

  const data = useRouteLoaderData('userLoggedIn')
  const accountNumber = data.payload.accountInfo.accountNumber

  function handleChange (e, setValueFunc) {
    e.preventDefault()
    const value = e.target.value
    setValueFunc(value)
  }

  async function handleSubmit (e) {
    setError('')
    e.preventDefault()
    if (!cvv || !titular || !numero) {
      setError('Todos los campos deben estar completos')
      return
    }
    const data = await associateCard(numero, cvv, cardType, titular, accountNumber)
    return redirect('/user/home')
  }

  return (
    <div className='flex flex-col gap-6 py-4'>
      <h1 className='text-primary font-bold text-2xl w-full text-center'>Nueva Tarjeta</h1>
      <p className='text-center'>Verifica tu informacion para asociar una tarjeta nueva</p>
      <form className='flex flex-col gap-4 w-[70%] max-w-screen-sm mx-auto items-center' onSubmit={(e) => handleSubmit(e)}>
        <select className='outline-0 px-2 py-3 border border-tableHeadColor rounded-lg peer transition duration-400 placeholder:text-gray-400 placeholder:font-roboto focus:border-primary w-[108%] max-w-screen-sm' onChange={(e) => handleChange(e, setCardType)}>
          <option value='DEBIT'>Débito</option>
          <option value='CREDIT'>Crédito</option>
        </select>
        <InputField content='Numero de tarjeta' func={(e) => handleChange(e, setNumero)} />
        <InputField content='Titular de la tarjeta' func={(e) => handleChange(e, setTitular)} />
        <InputField content='Codigo de control' func={(e) => handleChange(e, setCvv)} />
        {error && <p className='text-red-600 text-sm'>{error}</p>}
        <button className='py-2 px-8 rounded-full bg-primary text-white' type='submit'>Asociar Tarjeta</button>
      </form>
    </div >
  )
}
