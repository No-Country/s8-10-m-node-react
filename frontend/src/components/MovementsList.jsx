import { FaCheckCircle } from 'react-icons/fa'
import { FaExclamationCircle } from 'react-icons/fa'
import { formatCurrency } from '../utils/formatCurrency'

export const MovementsList = ({ movements }) => {
  return (
    <div className="grid grid-cols-movementsTable w-full md:max-w-7xl sm:w-[90%] items-stretch gap-x-0 gap-y-2 [&>*]:p-2 [&>*]:sm:text-base [&>*]:text-xs font-roboto">
      <h5 className="bg-tableHeadColor rounded-l-md text-left">Nombre</h5>
      <h5 className="bg-tableHeadColor text-center">Descripcion</h5>
      <h5 className="bg-tableHeadColor text-center">Fecha</h5>
      <h5 className="bg-tableHeadColor rounded-r-md text-right">Monto</h5>
      {movements.map((movement, i) => {
        return (
          <>
            <span
              key={i}
              className="bg-tableRowColor rounded-l-md flex justify-center truncate items-center"
            >
              {movement.status === 'APPROVED' ? (
                <FaCheckCircle fill="#4C27AE" />
              ) : (
                <FaExclamationCircle fill="#4C27AE" />
              )}
            </span>
            <span className="flex justify-center w-full h-full bg-tableRowColor">
              <p className="text-center">{movement.subject}</p>
            </span>
            <span className="flex justify-center w-full h-full bg-tableRowColor">
              <p className="truncate">{movement.date}</p>
            </span>
            <span className="flex justify-end w-full h-full bg-tableRowColor rounded-r-md">
              <p>{formatCurrency(movement.amount)}</p>
            </span>
          </>
        )
      })}
    </div>
  )
}
