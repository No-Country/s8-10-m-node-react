import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
}

const OnBoarding = () => {
  useEffect(() => {
    fetch('https://pagaya.onrender.com/api/business', requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log('error', error))
  }, [])

  const linkClass = `w-4/5 mx-auto py-2 text-center rounded-full font-semibold tracking-wide`

  return (
    <main className="w-full h-screen bg-image">
      <section className="flex flex-col h-[93%] items-center justify-end gap-3">
        <h1 className="text-xl w-full text-center mb-3 font-bold">
          Ofrece pagos a plazos flexibles para compras en línea.
        </h1>
        <Link to="login" className={`${linkClass} bg-[#012340] text-white`}>
          Ingresar
        </Link>
        <Link
          to="/register"
          className={`${linkClass} border border-[#012340] `}
        >
          Crear cuenta
        </Link>
      </section>
    </main>
  )
}

export default OnBoarding
