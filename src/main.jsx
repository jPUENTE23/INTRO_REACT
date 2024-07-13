import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import { PrimerComponente } from './PrimerComponente'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ListadoApp } from './ListadoApp';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <ListadoApp></ListadoApp>
      {/* <PrimerComponente nombre="Lauren Eve" appellidos="Mayberry"></PrimerComponente> */}
    </Theme>
  </React.StrictMode>,
)
