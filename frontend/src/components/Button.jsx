
export const Button = ({ children, nameClass, func, disabled }) => {
  return (
    <button type='text' className={`${nameClass}`} onClick={func} disabled={disabled}>
      {children}
    </button>
  )
}
