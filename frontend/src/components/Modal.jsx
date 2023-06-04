export const Modal = ({ children }) => {
  return (
    <div className="bg-black absolute w-screen h-screen top-0 left-0 z-10 bg-opacity-25 ">
      <div className="w-[448px] h-[304px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-[#4C27AE] p-4 flex flex-col">
        {children}
      </div>
    </div>
  )
}
