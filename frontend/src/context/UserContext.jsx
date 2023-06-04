import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (dataUser) => {
    setUser(dataUser)
  }

  const logOut = () => {
    setUser(null)
    console.log('Logging out user...')
    location.replace('/')
  }

  return (
    <UserContext.Provider value={{ user, login, logOut }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider