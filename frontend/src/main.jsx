import React from 'react'
import ReactDOM from 'react-dom/client'
import UserProvider from './context/UserContext.jsx'
import App from './App.jsx'
import './index.css'
import LayoutProvider from './context/LayoutContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <LayoutProvider>
        <App />
      </LayoutProvider>
    </UserProvider>
  </React.StrictMode>
)
