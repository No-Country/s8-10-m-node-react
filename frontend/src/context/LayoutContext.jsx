import { createContext, useContext, useEffect, useState } from 'react'

const LayoutContext = createContext()

export const useLayoutContext = () => useContext(LayoutContext)

const LayoutProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setWindowWidth(width)
    }
    window.addEventListener('resize', handleResize)
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <LayoutContext.Provider value={{ windowWidth }}>
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutProvider
