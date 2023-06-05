import { createBrowserRouter } from 'react-router-dom'
import OnBoarding from './pages/OnBoarding'
import { Login, loader as userStoredLoader } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { MyCards } from './pages/MyCards'
import { CreditCard, loader as creditCardPageLoader } from './pages/CreditCard'
import { Services } from './pages/Services'
import { Movements } from './pages/Movements'
import { Profile } from './pages/Profile'
import Transfers from './pages/Transfers'
import Contacts from './components/Contacts'
import NewContact from './components/NewContact'
import ToTransfer from './components/ToTransfer'
import { UserLayout, loader as userLoader } from './pages/Layout'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <OnBoarding />
  },
  {
    path: 'register',
    element: <Register />,
    loader: userStoredLoader
  },
  {
    path: 'login',
    element: <Login />,
    loader: userStoredLoader
  },
  {
    path: 'user',
    element: <UserLayout />,
    loader: userLoader,
    id: 'userLoggedIn',
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'mycards',
        element: <MyCards />
      },
      {
        path: 'mycards/:creditCardId',
        element: <CreditCard />,
        loader: creditCardPageLoader
      },
      {
        path: 'transfers',
        element: <Transfers />,
        children: [
          {
            path: 'transfers/contacts',
            element: <Contacts />,
            children: [
              {
                path: 'transfers/contacts/sendAmount',
                element: <ToTransfer />
              }
            ]
          },
          {
            path: 'transfers/newContact',
            element: <NewContact />,
            children: [
              {
                path: 'transfers/newContact/sendAmount',
                element: <ToTransfer />
              }
            ]
          }
        ]
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'movements',
        element: <Movements />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  }
])