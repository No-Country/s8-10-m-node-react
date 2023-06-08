import { PropTypes } from 'prop-types'
import { Modal } from './Modal'
import { useModal } from '../hooks/useModal'
import { FaEllipsisV, FaTrash } from 'react-icons/fa'

const Contacts = ({ listContacts }) => {
  const [deleteContact, openDeleteContact, closeDeleteContact] = useModal()

  return (
    <section className="w-full pl-4 max-w-screen-md mx-auto">
      {listContacts.map((contacto) => (
        <div
          className="h-[5rem] w-full flex justify-between items-center border-b-2 border-white py-2 px-4 hover:bg-gray-200 transition-colors duration-300 "
          key={contacto.name}
        >
          <div>
            <h3>{contacto.name}</h3>
            <span className="text-xs text-gray-400 italic">
              {contacto.bank}
            </span>
          </div>
          <FaEllipsisV
            size={20}
            className="cursor-pointer text-gray-400"
            onClick={openDeleteContact}
          />
        </div>
      ))}
      {deleteContact && (
        <Modal closeModal={closeDeleteContact}>
          <div
            className='w-full rounded-t-[40px] flex justify-center items-center h-full'
          >
            <button
              type="button"
              className="flex items-center gap-4 border border-red-500 py-4 px-8 rounded-lg cursor-pointer"
            >
              <FaTrash size={20} className="text-red-500" />
              Eliminar contacto
            </button>
          </div>
        </Modal>
      )}
    </section>
  )
}

Contacts.propTypes = {
  listContacts: PropTypes.array,
  openModal: PropTypes.func,
}

export default Contacts
