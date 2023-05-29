
export const Button = ({ children, nameClass }) => {
  return (
    <button type='text' className={`${nameClass}`}>
      {children}
    </button>
  )
}
