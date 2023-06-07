import { createBrowserRouter } from 'react-router-dom'
import OnBoarding from './pages/OnBoarding'
import { Login, loader as checkUserLoggedLoader } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { MyCards } from './pages/MyCards'
import { CreditCard, loader as creditCardPageLoader } from './pages/CreditCard'
import { Services } from './pages/Services'
import { Movements } from './pages/Movements'
import Transfers from './pages/Transfers'
import Contacts from './components/Contacts'
import NewContact from './components/NewContact'
import ToTransfer from './components/ToTransfer'
import { ProfileOptions } from './pages/ProfileOptions'
import { UserLayout, loader as userLoader } from './pages/Layout'
import Soporte from './components/Soporte'
import { Perfil } from './components/Perfil'
import { Aspectos } from './components/Aspectos'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <OnBoarding />,
  },
  {
    path: 'register',
    element: <Register />,
    loader: checkUserLoggedLoader,
  },
  {
    path: 'login',
    element: <Login />,
    loader: checkUserLoggedLoader,
  },
  {
    path: 'user',
    element: <UserLayout />,
    loader: userLoader,
    id: 'userLoggedIn',
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'mycards',
        element: <MyCards />,
      },
      {
        path: 'mycards/:creditCardId',
        element: <CreditCard />,
        loader: creditCardPageLoader,
      },
      {
        path: 'transfers',
        element: <Transfers />,
        children: [
          {
            path: 'contacts',
            element: <Contacts />,
            children: [
              {
                path: 'sendAmount',
                element: <ToTransfer />,
              },
            ],
          },
          {
            path: 'newContact',
            element: <NewContact />,
            children: [
              {
                path: 'sendAmount',
                element: <ToTransfer />,
              },
            ],
          },
        ],
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'movements',
        element: <Movements />,
      },
      {
        path: 'options',
        element: <ProfileOptions/>,
      },
      {
        path: 'soporte',
        element: <Soporte/>,
      },
      {
        path: 'perfil',
        element: <Perfil/>,
      },
      {
        path: 'aspectos',
        element: <Aspectos/>,
      }
    ],
  },
])