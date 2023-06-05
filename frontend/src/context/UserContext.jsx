import { createContext, useContext, useEffect, useState } from 'react'
import { loginUser } from '../services/login'
import Loader from '../components/Loader'

const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const loggedUserJSON = window.sessionStorage.getItem('dominoUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    } else {
      setUser({})
    }

    setLoading(false)
  }, [])

  const login = async (credentials) => {
    try {
      setLoading(true)
      const user = await loginUser(credentials)
      if (user.status === 'success') {
        window.sessionStorage.setItem('dominoUser', JSON.stringify(user))
        setUser(user)
        window.location.replace('/user/home')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const logOut = () => {
    sessionStorage.removeItem('dominoUser')
    setUser(null)
    console.log('Logging out user...')
    location.replace('/')
  }

  return (
    <UserContext.Provider value={{ user, login, logOut, loading }}>
      {loading ? <Loader /> : children}
    </UserContext.Provider>
  )
}

export default UserProvider
