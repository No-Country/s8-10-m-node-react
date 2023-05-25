import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import Transfers from './pages/Transfers'
import Contacts from './components/Contacts'
import NewContact from './components/NewContact'
import ToTransfer from './components/ToTransfer'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
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
              element: <ToTransfer />,
            },
          ],
        },
        {
          path: '/transfers/newContact',
          element: <NewContact />,
          children: [
            {
              path: '/transfers/newContact/sendAmount',
              element: <ToTransfer />,
            },
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
