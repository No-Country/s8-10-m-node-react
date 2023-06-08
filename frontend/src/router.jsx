import { createBrowserRouter } from 'react-router-dom'
import OnBoarding from './pages/OnBoarding'
import { Login, loader as checkUserLoggedLoader } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { MyCards } from './pages/MyCards'
import { CreditCard, loader as creditCardPageLoader } from './pages/CreditCard'
import { Services, loader as servicesLoader } from './pages/Services'
import { Movements } from './pages/Movements'
import Transfers from './pages/Transfers'
import Contacts from './components/Contacts'
import NewContact from './components/NewContact'
import ToTransfer from './components/ToTransfer'
import { Configuration } from './pages/Configuration'
import { UserLayout, loader as userLoader } from './pages/Layout'
import Soporte from './components/Soporte'
import RecargaBilletera from './components/RecargaBilletera'

import Success from './components/Success'
import { PayService, loader as payServiceLoader } from './pages/PayService'
import { ErrorPage } from './pages/errorPage'
import { AssociateCard } from './pages/AssociateCard'
import { Profile } from './pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <OnBoarding />,
    errorElement: <ErrorPage />,
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
        path: 'mycards/associateCard',
        element: <AssociateCard />,
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
        loader: servicesLoader,
      },
      {
        path: 'services/:serviceId',
        element: <PayService />,
        loader: payServiceLoader,
      },
      {
        path: 'movements',
        element: <Movements />,
      },
      {
        path: 'configuracion',
        element: <Configuration />,
      },
      {
        path: 'soporte',
        element: <Soporte />,
      },
      {
        path: 'perfil',
        element: <Profile />,
      },
      {
        path: 'recarga',
        element: <RecargaBilletera />,
      },

      {
        path: 'success',
        element: <Success qr={true} />,
      },
    ],
  },
])
