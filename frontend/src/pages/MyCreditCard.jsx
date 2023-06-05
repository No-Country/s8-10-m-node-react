// // import { CreditCardComp } from '../components/CreditCardComp'
// import { Button } from '../components/Button'
// import { TogglePill } from '../components/TogglePill'
// import { useParams } from 'react-router-dom'
// import { PageTitle } from './../components/PageTitle'

// export const MyCreditCard = () => {
//   const { creditCardId } = useParams()
//   // const [windowWidth, setWindowWidth] = useState(window.innerWidth)

//   // useEffect(() => {
//   //   const handleResize = () => {
//   //     const width = window.innerWidth
//   //     setWindowWidth(width)
//   //   }

//   //   // Attach event listener to monitor resize
//   //   window.addEventListener('resize', handleResize)

//   //   // Clean up the event listener on component unmount
//   //   return () => {
//   //     window.removeEventListener('resize', handleResize)
//   //   }
//   // }, [])

//   return (
//     <>
//       <PageTitle>Tarjetas</PageTitle>
//       <CreditCardComp height={180} />
//       <div className="flex flex-col w-full gap-2 font-medium font-roboto px-2">
//         <div className="flex w-full items-center justify-between">
//           <p>Pausar tarjeta</p>
//           <TogglePill />
//         </div>
//         <div className="flex w-full items-center justify-between">
//           <p>Cambiar PIN cajero</p>
//           <span className="cursor-pointer"></span>
//         </div>
//         <div className="flex w-full items-center justify-between">
//           <p>Denunciar</p>
//           <span className="cursor-pointer"></span>
//         </div>
//         <Button className="bg-[#42ADD5] text-white">
//           <p className="font-medium text-center text-lg w-[70%]">
//             Eliminar tarjeta
//           </p>
//         </Button>
//       </div>
//       {/* {windowWidth > 480 ? <p>Estamos en desktop o tablet</p> : <p>Estamos en mobile</p>} */}
//     </>
//   )
// }
