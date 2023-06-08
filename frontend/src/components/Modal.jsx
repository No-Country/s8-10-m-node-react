export const Modal = ({ children, closeModal }) => {
  return (
    <div
      className="bg-black absolute w-screen h-screen top-0 left-0 z-10 bg-opacity-25 overflow-hidden"
      onClick={closeModal}
    >
      <div
        className="sm:w-[448px] sm:min-h-[304px] w-screen h-auto bg-white absolute overflow-hidden sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 -bottom-4 rounded-2xl p-8 flex flex-col items-center justify-center border-primary border-2 sm:animate-slide-in-desktop animate-slide-in-phone"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
