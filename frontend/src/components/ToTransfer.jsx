import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../assets/images/back.svg';
import PopUp from './PopUp';
import Success from './Success';
import { useUserContext } from '../context/UserContext';

const ToTransfer = ({ setConfirm, close, accountNumber, name }) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { user } = useUserContext();
  const { payload } = user;
  const cuenta = payload.accountInfo.accountNumber;

  const validateAmount = (e) => {
    e.preventDefault();
    if (parseInt(amount) === 0 || parseInt(amount) > parseInt(payload.accountInfo.amount)) {
      setError(true);
    } else {
      // Crear objeto con los datos de la transferencia
      const transferData = {
        typeTransaction: 'TRANSFER',
        emitter: cuenta,
        addressee: accountNumber,
        amountQuantity: parseInt(amount),
        subject: 'Un mensaje breve'
      };


      // Realizar solicitud POST a la API
      fetch('https://pagaya.onrender.com/api/business', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transferData)
      })
        .then((response) => response.json())
        .then((data) => {
          // Manejar la respuesta del servidor
          console.log(data);
          setShowSuccess(true);
        })
        .catch((error) => {
          // Manejar errores
        });
    }
  };

  const navigate = useNavigate()

  return (
    <section>
      {showSuccess ? (
        <Success amount={parseInt(amount)} name={name.name} />
      ) : (
        <>
          <img
            className="ml-5 cursor-pointer relative -top-[120px]"
            src={back}
            alt="volver atras"
            onClick={() => {
              close()
              setConfirm(false)
              navigate(-1)
            }}
          />
          <form
            className="flex flex-col gap-3 w-full px-5 mx-auto"
            onSubmit={validateAmount}
          >
            <label className=" text-center text-xl " htmlFor="amount">
              Ingrese un monto
            </label>
            <input
              className="w-4/5 mx-auto text-center text-xl p-3 outline-none rounded-md bg-transparent italic"
              type="number"
              name="amount"
              placeholder="$ 200"
              onChange={(e) => setAmount(e.target.value)}
            />

            <button
              className="w-2/3 mx-auto mt-10 py-2 bg-green-600 rounded-md text-white text-lg font-semibold tracking-wide cursor-pointer"
              type="submit"
            >
              Enviar
            </button>
            {error && (
              <PopUp setError={setError} message="Ingresa un monto por favor" />
            )}
          </form>
        </>
      )}
    </section>
  )
}


export default ToTransfer
