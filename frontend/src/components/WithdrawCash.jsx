import { Modal } from './Modal'
import { Button } from './Button'
import {
  IoChevronForward,
  IoCashOutline,
  IoClose,
  IoTrendingDownOutline,
  IoCardOutline,
} from 'react-icons/io5'
import { useModal } from '../hooks/useModal'
import { useState } from 'react'
import InputField from './InputField'
import { useUserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const WithdrawCash = () => {
  const [isOpenWithdraw, openWithdraw, closeWithdraw] = useModal()
  const [showFacilities, setShowFacilities] = useState(false)
  const [formWithdraw, setFormWithdraw] = useState(false)
  const { user } = useUserContext()
  const navigate = useNavigate()

  const validateCash = (e) => {
    e.preventDefault()

    const money = e.target.money.value
    if (money > 0 && money <= user.payload.accountInfo.amount) {
      closeWithdraw()
      setFormWithdraw(false)
      navigate('../success')
    }
  }

  return (
    <>
      <Button
        func={openWithdraw}
        nameClass="w-[150px] flex items-center justify-center gap-2 rounded-lg text-white font-inter bg-[#4C27AE] md:hidden"
      >
        <IoTrendingDownOutline size={20} />
        Retirar
      </Button>

      {isOpenWithdraw && (
        <Modal closeModal={closeWithdraw} otherClose={setFormWithdraw}>
          <IoClose
            className="absolute right-4 top-4 text-[#4C27AE] cursor-pointer"
            onClick={() => {
              setFormWithdraw(false)
              closeWithdraw()
            }}
            size={25}
          />

          {formWithdraw ? (
            <form
              className="w-[90%] flex flex-col gap-6 justify-center items-center  min-[420px]:justify-start "
              onSubmit={validateCash}
            >
              <h2 className="font-roboto text-lg mt-8 text-center tracking-wide">
                Ingrese la cantidad que desea retirar para generar su código QR
              </h2>
              <InputField
                id="money"
                type="number"
                name="money"
                placeholder="Ingrese la cantidad"
                content="Retirar"
              />
              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  nameClass="w-72 bg-[#4C27AE] text-white py-3 rounded-lg font-roboto tracking-wider max-sm:w-48 cursor-pointer"
                >
                  Generar
                </Button>
                <Button
                  nameClass="w-72 border border-red-600 text-red-600 py-2 rounded-lg font-roboto tracking-wider max-sm:w-48 mb-8 cursor-pointer"
                  func={() => setFormWithdraw(false)}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          ) : (
            <div className="w-full flex flex-col gap-6 justify-center min-[420px]:w-[300px] ">
              <h2 className="font-roboto text-2xl font-bold mt-5">
                Opciones de retiro
              </h2>

              <Button
                nameClass="w-80 flex justify-between items-center px-4 py-3 font-roboto font-medium border rounded-md border-[#4C27AE] "
                func={() => setShowFacilities(!showFacilities)}
              >
                <IoCashOutline size={20} />
                Cajero
                <IoChevronForward
                  size={20}
                  className={`transition-all duration-300 ${
                    showFacilities ? 'rotate-90' : 'rotate-0'
                  } `}
                />
              </Button>

              {showFacilities && (
                <p className={`text-center font-roboto `}>
                  Todos los bancos aceptan nuestra tarjeta
                </p>
              )}

              <h2 className="font-roboto text-lg font-medium">
                ¿De dónde retiras el dinero?
              </h2>

              <Button
                nameClass="w-80 flex justify-between items-center px-4 py-3 font-robot  font-medium border rounded-md border-[#4C27AE] "
                func={() => setFormWithdraw(true)}
              >
                <IoCardOutline size={20} />
                Tarjeta Dominó
                <IoChevronForward size={20} />
              </Button>

              <p className="font-roboto mb-8 text-[#232121]">
                Antes, revisa si tienes saldo disponible para retirar
              </p>
            </div>
          )}
        </Modal>
      )}
    </>
  )
}

export default WithdrawCash
