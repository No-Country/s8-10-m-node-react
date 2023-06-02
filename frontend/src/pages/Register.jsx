import InputField from "../components/InputField";
import { Button } from '../components/Button'
import { useState } from 'react';
import UserInformation from '../components/UserInformation';
import Validation from '../components/Validation';
import PersonalInfo from '../components/PersonalInfo';

export const Register = () => {
  const [page, setPage] = useState(0)

  const formTitles = ["Información del Usuario", "Validación", "Información Personal"]
  const submitForm = (e) =>{
    e.preventDefault()
  }

  const managePaging = (newPage) => {
    if(newPage === "next" && page < formTitles.length - 1){
      setPage(page + 1)
    }else if(newPage === "prev" && page > 0){
      setPage(page - 1)
    }
  }

  const pageLoaded = () =>{
    switch (page) {
      case 0:
        return <UserInformation />
      case 1:
        return <Validation />
      case 2:
        return <PersonalInfo />
      default:
        return <UserInformation />
    }
  }

  return (
    <main className='w-full min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold font-inter text-center text-gray-700 mb-4'>Registrate</h1>
      <h3 className='font-inter text-lg text-center text-gray-500 mb-[4.5rem]'>{formTitles[page]}</h3>
      <section className='w-full flex justify-center'>
        <form className='w-5/6 flex flex-col gap-8' onSubmit={submitForm}>
          { pageLoaded() }

          <div className='flex gap-4 justify-center'>
            <Button func={() => managePaging('prev')} disabled={ page === 0 && true} type="button" nameClass='text-center mt-12 px-10 py-2 rounded-full bg-[#348AD0] text-white font-semibold tracking-wider cursor-pointer disabled:opacity-40'>Anterior</Button>

            { page === formTitles.length - 1 ?
              <Button type="submit" nameClass='text-center mt-12 px-8 py-2 rounded-full bg-[#348AD0] text-white font-semibold tracking-wider cursor-pointer '>Registrarse</Button>
              :
              <Button func={() => managePaging('next')} disabled={ page === formTitles.length - 1 && true} type="button" nameClass='text-center mt-12 px-10 py-2 rounded-full  bg-[#348AD0] text-white font-semibold tracking-wider cursor-pointer disabled:opacity-40'>Siguiente</Button>
            }

          </div>
        </form>
      </section>
    </main>
  )
}
