import PropTypes from 'prop-types'

const Modal = ({ children, close }) => {
  return (
    <section
      className="fixed bottom-0 left-0 w-full h-screen bg-black/50"
      onClick={close}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </section>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func,
}

export default Modal
