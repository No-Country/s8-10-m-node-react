import React, { useState } from 'react'
import { SERVICES } from '../utils/servicesItems'
import {
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
  redirect,
} from 'react-router-dom'
import InputField from '../components/InputField'
import { Modal } from '../components/Modal'
import { TbCash } from 'react-icons/tb'
import { payService } from '../services/payServices'

export const loader = ({ params }) => {
  const { serviceId } = params
  const service = SERVICES.find((service) => service.path === serviceId)
  return service
}

export const PayService = () => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const user = useRouteLoaderData('userLoggedIn')
  const saldo = user.payload.accountInfo.amount
  const costoServicio = 20

  const service = useLoaderData()

  const navigateBack = () => {
    navigate(-1)
  }

  const handleShowModalClick = () => {
    setShowModal(true)
  }

  const hideModalClick = () => {
    setShowModal(false)
  }

  const handlePayment = async () => {
    const subject = `Pago del servicio de ${service.name}`
    const alias = user.payload.accountInfo.alias
    try {
      const res = await payService(alias, costoServicio, subject)
      navigate('/user/home')
      return res
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col w-[75%] px-4 md:w-1/2 min-h-[70vh] items-center mx-auto justify-center gap-6">
      <h1 className="font-bold text-primary tracking-tight text-2xl">
        Ingresa tu codigo de pago
      </h1>
      <span className="bg-gradient-to-b from-black py-2 to-slate-800 h-36 w-full flex items-center justify-center rounded-md">
        <img src={service.svg} className="h-[80%]" />
      </span>
      <h2 className="font-bold text-xl leading-3 tracking-tight">
        {service.name}
      </h2>
      <p>Descuento del 5% pagando con VISA</p>
      <InputField labelFor="Codigo" content="Código" />
      <span className="w-full flex items-center justify-between gap-6">
        <button
          className="py-1 px-8 w-[300px] rounded-full border-red-500 border-[1px] text-red-700 font-medium"
          onClick={navigateBack}
        >
          Cancelar
        </button>
        <button
          className="py-1 px-8 w-[300px] rounded-full bg-primary text-white font-medium"
          onClick={handleShowModalClick}
        >
          Continuar
        </button>
      </span>
      {showModal && (
        <Modal closeModal={hideModalClick}>
          <div className="flex flex-col gap-4 font-inter justify-evenly h-full">
            <span className="flex flex-col items-center gap-2 justify-center">
              <TbCash stroke="#4C27AE" size={24} />
              <h3 className="font-bold text-2xl text-primary">
                Pagar {service.name}
              </h3>
            </span>
            <span className="flex flex-col items-center gap-1 text-sm">
              <p>¿Estas seguro que deseas pagar {service.name}?</p>
              <p>Saldo disponible: ${saldo}</p>
              <p>Costo del servicio: ${costoServicio}</p>
            </span>
            <span className="w-full flex justify-between text-primary">
              <button
                className="py-2 px-8 rounded-full border-[1px] border-tableRowColor"
                onClick={hideModalClick}
              >
                Cancelar
              </button>
              <button
                className="py-2 px-8 rounded-full bg-tableRowColor disabled:cursor-not-allowed"
                disabled={costoServicio > saldo}
                onClick={handlePayment}
              >
                Pagar
              </button>
            </span>
          </div>
        </Modal>
      )}
    </div>
  )
}
