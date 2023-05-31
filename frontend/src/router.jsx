import { createBrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { MyCards } from './pages/MyCards'
import { MyCreditCard } from './pages/MyCreditCard'
import { Layout } from './pages/Layout'
import { Services } from './pages/Services'
import { Movements } from './pages/Movements'
import {Profile}  from './pages/Profile'
import Transfers from './pages/Transfers'
import Contacts from './components/Contacts'
import NewContact from './components/NewContact'
import ToTransfer from './components/ToTransfer'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'mycards',
        element: <MyCards />
      },
      {
        path: 'mycards/:creditCardId',
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
        element: <Profile/>
      }
    ]
  }

])
