import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import Transfers from './pages/Transfers'
import Contacts from './components/Contacts'
import NewContact from './components/NewContact'
import ToTransfer from './components/ToTransfer'
import { MyCards } from './pages/MyCards'
import { MyCreditCard } from './pages/MyCreditCard'
import OnBoarding from './pages/OnBoarding'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <OnBoarding />
    },
    {
      path: '/home',
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
    },
    {
      path: '/transfers',
      element: <Transfers />,
      children: [
        {
          path: '/transfers/contacts',
          element: <Contacts />,
          children: [
            {
              path: '/transfers/contacts/sendAmount',
              element: <ToTransfer />
            }
          ]
        },
        {
          path: '/transfers/newContact',
          element: <NewContact />,
          children: [
            {
              path: '/transfers/newContact/sendAmount',
              element: <ToTransfer />
            }
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
