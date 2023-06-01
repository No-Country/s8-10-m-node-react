
export const Button = ({ children, nameClass, func }) => {
  return (
    <button type='text' className={`${nameClass}`} onClick={func}>
      {children}
    </button>
  )
}
