import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  


  const login = (dataUser) => {
    setUser(dataUser)
  }

  const logOut = () =>{
    setUser({})
  }

  return (
    <UserContext.Provider value={{user, login, logOut}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider