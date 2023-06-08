import PopUp from './PopUp'
import { Modal } from '../components/Modal'
import { useModal } from '../hooks/useModal'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ToTransfer from './ToTransfer'
import { FaTimes } from 'react-icons/fa'
const requestOptions = {
  method: 'GET',
  redirect: 'follow',
}

const NewContact = () => {
  const [searchOpen, openSearchModal, closeSearchModal] = useModal()
  const [error, setError] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [user, setUser] = useState({})
  const [accountName, setAccountName] = useState({ name: '', lasname: '', alias: '' })

  //filter data
  const validateForm = async (e) => {
    e.preventDefault();
    if (e.target.alias.value.trim() === '') {
      setError(true);
    } else {
      const aliasToFind = e.target.alias.value.trim();
      try {
        const response = await fetch(`https://dominoback.onrender.com/api/user/${aliasToFind}`, requestOptions);
        if (response.ok) {
          const user = await response.json();
          setUser(user);

          setAccountName({ name: user.payload.profile.fullName, lasname: user.payload.profile.lastName, alias: user.payload.accountInfo.alias })
          openSearchModal();
        } else {
        }
      } catch (error) {
      }
    }
  };
  //console.log(contact)
  const navigate = useNavigate()

  return (
    <section className="mt-[10rem] md:mt-0 max-w-screen-sm mx-auto">
      {!confirm ? (
        <>
          <form
            className="flex flex-col gap-3 w-full px-5 mx-auto"
            onSubmit={validateForm}
          >
            <label className="text-gray-400 italic" htmlFor="alias">
              Alias, CBU o CVU
            </label>
            <input
              className="p-3 border border-black/40 rounded-md bg-transparent"
              type="text"
              name="alias"
              placeholder="0704 xxx"
            />

            <button
              className="w-4/5 mx-auto mt-10 py-2 bg-gray-600 rounded-md text-white text-lg font-semibold tracking-wide cursor-pointer"
              type="submit"
            >
              Buscar
            </button>
            {error && (
              <PopUp setError={setError} message="Por favor ingrese un alias" />
            )}
          </form>
          {searchOpen && (
            <Modal className="w-full h-full">
              <div
                className={`w-full bottom-0 bg-white rounded-t-[40px] flex flex-col justify-evenly items-center`}
              >
                <div className="w-full text-center relative pt-3">
                  <h3 className="text-2xl font-semibold">
                    {accountName.name} {accountName.lasname}
                  </h3>
                  <p className="text-gray-400 text-md">
                    {user.payload.accountInfo.accountNumber}
                  </p>
                  <FaTimes
                    className="absolute -top-1 right-[30px] cursor-pointer"
                    size={20}
                    onClick={closeSearchModal}
                  />
                </div>
                <div className="w-full flex flex-col gap-4 pl-8">
                  <div>
                    <h4 className="text-2xl font-semibold">Alias</h4>
                    <p className="text-gray-500">{accountName.alias}</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold">CBU</h4>
                    <p className="text-gray-500">
                      {user.payload.accountInfo.accountNumber}{' '}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold">Banco</h4>
                    <p className="text-gray-500">Domino</p>
                  </div>
                </div>
                <div className="w-full px-4 flex gap-5">
                  <button
                    className="w-4/5 mx-auto py-2 bg-red-500 rounded-md text-white text-lg font-semibold tracking-wide cursor-pointer"
                    onClick={closeSearchModal}
                  >
                    Canelar
                  </button>
                  <button
                    className="w-4/5 mx-auto py-2 bg-green-500 rounded-md text-white text-lg font-semibold tracking-wide cursor-pointer"
                    onClick={() => {
                      setConfirm(true)
                      navigate('sendAmount')
                    }}
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </Modal>
          )}
        </>
      ) : (
        <ToTransfer
          setConfirm={setConfirm}
          close={closeSearchModal}
          accountNumber={user.payload.accountInfo.accountNumber}
          accountName={accountName.name}
          name={accountName}
        />
      )}
    </section>
  )
}

export default NewContact
