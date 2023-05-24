import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { MyCards } from './pages/MyCards'
import { MyCreditCard } from './pages/MyCreditCard'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/mycards',
      element: <MyCards />
    },
    {
      path: '/mycards/:creditCardId',
      element: <MyCreditCard />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
