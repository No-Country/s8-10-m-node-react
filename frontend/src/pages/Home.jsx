import { useNavigate } from 'react-router'
import { Button } from '../components/Button'
import { CreditCardComp } from '../components/CreditCardComp'
import { FaBars, FaBell, FaRegEye } from 'react-icons/fa'
import { IoTrendingUp, IoTrendingDownOutline } from 'react-icons/io5'
import { useUserContext } from '../context/UserContext'

export const Home = () => {

  const navigate = useNavigate()
  const { logOut } = useUserContext()


  return (
    <main className='w-full min-h-screen flex flex-col items-center bg-gray-100 px-2 py-4'>
      <section className='w-[90%] h-[300px] py-3 px-5 mx-auto flex flex-col items-center gap-10 bg-[#42ADD5] rounded-[30px] mb-7'>
        <div className='w-full flex justify-between items-center'>
          <FaBars size={25} />
          <h2 className=' w-20 text-center font-inter '>Welcome, <span className='text-xl font-bold'>Carlos</span></h2>
          <img className='w-12 h-12 rounded-full object-cover' src='https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80' alt='photo of user' />
          <FaBell size={20} />
        </div>
        <div className='w-full text-center relative text-white font-inter'>
          <h1 className='text-3xl mb-3'>Disponible</h1>
          <p className='text-2xl tracking-wider font-bold'>$100.000</p>
          <FaRegEye className='absolute right-2 top-[52px] text-black' size={24} />
        </div>
        <div className='w-full flex gap-3'>
          <Button nameClass='w-1/2 py-2 flex items-center justify-center gap-2 rounded-lg text-white font-inter bg-[#012340]'>
            <IoTrendingUp size={20} />
            Transferir
          </Button>
          <Button nameClass='w-1/2 py-2 flex items-center justify-center gap-2 rounded-lg text-white font-inter bg-[#012340]'>
            <IoTrendingDownOutline size={20} />
            Retirar
          </Button>
        </div>
      </section>
      <CreditCardComp height='160' cardNumber='4111111111111111' />
      <section>
        <Button func={() => {
          logOut()
          navigate('/')
        }} >
          Cerrar sesion
        </Button>
      </section>
    </main>
  )
}
