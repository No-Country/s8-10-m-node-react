import React, { useState } from "react";
import { Button } from "./Button";
import InputField from "./InputField";
import { useNavigate } from 'react-router-dom'
import Success from './Success';
import back from '../assets/images/back.svg';
const RecargaBilletera = () => {
  const [validateForm, setValidateForm] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate()
  const [envio, setEnvio] = useState({
    alias: "",
    monto: "",
  });

  const cancelar = () => {
    navigate("/user/home")
  }

  const handleChange = (e) => {
    setValidateForm({
      ...validateForm,
      [e.target.name]: e.target.value,
    });
  };

  const validate = async (e) => {
    e.preventDefault();

    const { alias, monto } = validateForm;
    if (alias && monto) {
      const transferData = {
        typeTransaction: "DEPOSIT",
        emitter: alias,
        amountQuantity: parseInt(monto),
        subject: "Un mensaje breve",
      };
      setEnvio({
        alias: alias,
        monto: monto,
      });




      fetch("https://pagaya.onrender.com/api/business", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transferData),
      })
        .then((response) => response.json())

        .catch((error) => {
          console.log(error);
        });
      setShowSuccess(true);
    }
    else {
      alert('Complete los campos')
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center gap-20">

      <section className="w-full flex px-8 flex-col items-center sm:flex-col sm:justify-center">
        {showSuccess ? (
          <Success amount={envio.monto} name={envio.alias} />
        ) : (
          <>





            <form
              className="w-full flex pt-16 gap-6 flex-col items-center sm:flex-col sm:justify-center"
              onSubmit={validate}
            >
              <InputField
                id="alias"
                type="text"
                name="alias"
                placeholder="snow.frontender94"
                labelFor="Alias o numero de cuenta"
                content="Alias o numero de cuenta"
                func={handleChange}
              />

              <InputField
                id="monto"
                type="number"
                name="monto"
                placeholder="$0"
                labelFor="Monto"
                content="Monto"
                func={handleChange}
              />

              <div className="flex w-2/4 flex-col gap-4">
                <Button
                  type="submit"
                  nameClass="bg-customColor mt-8 py-3 rounded-full text-white font-semibold tracking-wide"
                >
                  Continuar
                </Button>
                <button

                  onClick={cancelar}

                  className="border-2 border-red-500 mt-2 py-3 rounded-full text-red-500 font-semibold tracking-wide"
                >
                  Canselar
                </button>

              </div>
            </form>

          </>
        )}

      </section>
    </main>
  );
};

export default RecargaBilletera;
