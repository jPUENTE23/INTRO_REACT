import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
//import { PrimerComponente } from './PrimerComponente'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { CUseCallback } from './components/CUseCallback';
// import { ListadoApp } from './ListadoApp';
// import { UsersApp } from './UsersApp';

// import { AppHook } from './AppHook';

// import { CFormulario } from './components/cFormulario';
// import { CUsuaeios } from './components/CUsuaeios';
// import { CCalculoPesado } from './components/CCalculoPesado';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <CUseCallback></CUseCallback>
      {/* <PrimerComponente nombre="Lauren Eve" appellidos="Mayberry"></PrimerComponente> */}
    </Theme>
  </React.StrictMode>,
)
