
export const Button = ({ children, nameClass, func, disabled }) => {
  return (
    <button className={`${nameClass}`} onClick={func} disabled={disabled}>
      {children}
    </button>
  )
}
