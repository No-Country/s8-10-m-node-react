import options from '../assets/images/options.svg'
import trash from '../assets/images/trash.svg'
import { PropTypes } from 'prop-types'
import Modal from './Modal'
import { useModal } from '../hooks/useModal'

const Contacts = ({ listContacts }) => {
  const [deleteContact, openDeleteContact, closeDeleteContact] = useModal()

  return (
    <section className="pl-4">
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
          <img
            className="cursor-pointer"
            src={options}
            alt="options"
            onClick={openDeleteContact}
          />
        </div>
      ))}
      {deleteContact && (
        <Modal close={closeDeleteContact}>
          <div
            className={`w-full h-[100px] fixed bottom-0 bg-white  ${
              deleteContact
                ? 'translate-y-0 duration-300 ease-in'
                : 'transition-transform translate-y-full duration-300 ease-out delay-300'
            } rounded-t-[40px] flex justify-center items-center`}
          >
            <button
              type="button"
              className="flex items-center gap-8 border border-sky-500 py-4 px-8 rounded-lg cursor-pointer"
            >
              <img
                className="h-[20px] w-[20px] object-contain"
                src={trash}
                alt="ícono de basura para identificar un contacto que se va a eliminar"
              />
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
