import PopUp from './PopUp'
import { Modal } from '../components/Modal'
import cross from '../assets/images/cross.svg'
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
  const [contact, setContact] = useState({})
  const [accountName, setAccountName]= useState({name:'',lasname:''})

  //data from api
  useEffect(() => {
    fetch('https://pagaya.onrender.com/api/user', requestOptions)
      .then((res) => res.json())
      .then((data) => setUser(data))
      
      .catch((error) => console.log('error', error))
      
  }, [])
  
  const { response } = user
  console.log(response)

 // console.log(response[1].account)

//filter data
const validateForm = (e) => {
  e.preventDefault();
  if (e.target.alias.value.trim() === '') {
    setError(true);
  } else {
    const aliasToFind = e.target.alias.value.trim();
    const foundAccount = response.find(person => person.account[0].alias === aliasToFind);

    if (foundAccount) {
      const account = foundAccount.account[0];
      const fullName = foundAccount.fullName
      const lastName = foundAccount.lastName
      setAccountName({name:fullName,lasname:lastName})
     
     // console.log(account); // Muestra la cuenta correspondiente al alias encontrado
      setContact(account);
      // Aquí puedes realizar la lógica adicional que necesites con la cuenta encontrada
    

      openSearchModal();
    } else {
      console.log('No se encontró ninguna cuenta con ese alias.');
    }
  }
};
//console.log(contact)
  const navigate = useNavigate()

  return (
    <section className="mt-[10rem]">
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
                className={`w-full h-[400px] fixed bottom-0 bg-white  ${searchOpen
                    ? 'translate-y-0 duration-300 ease-in'
                    : 'transition-transform translate-y-full duration-300 ease-out delay-300'
                  } rounded-t-[40px] flex flex-col justify-evenly items-center`}
              >
                <div className="w-full text-center relative pt-3">
                  <h3 className="text-2xl font-semibold">{accountName.name} {accountName.lasname}</h3>
                  <p className="text-gray-400 text-md">{contact.accountNumber}</p>
                  <FaTimes
                    className="absolute -top-1 right-[30px] cursor-pointer"
                    size={20}
                    onClick={closeSearchModal}
                  />
                </div>
                <div className="w-full flex flex-col gap-4 pl-8">
                  <div>
                    <h4 className="text-2xl font-semibold">Alias</h4>
                    <p className="text-gray-500">{contact.alias}</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold">CBU</h4>
                    <p className="text-gray-500">{contact.accountNumber} </p>
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
        <ToTransfer setConfirm={setConfirm} close={closeSearchModal} />
      )}
    </section>
  )
}

export default NewContact