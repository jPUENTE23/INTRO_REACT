import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
//import { PrimerComponente } from './PrimerComponente'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
// import { ListadoApp } from './ListadoApp';
import { UsersApp } from './UsersApp';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <UsersApp></UsersApp>
      {/* <PrimerComponente nombre="Lauren Eve" appellidos="Mayberry"></PrimerComponente> */}
    </Theme>
  </React.StrictMode>,
)
