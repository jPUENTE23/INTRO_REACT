import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
//import { PrimerComponente } from './PrimerComponente'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
// import { CUseCallback } from './components/CUseCallback';
// import { CReducer } from './components/CReducer';
// import { ListadoApp } from './ListadoApp';
// import { UsersApp } from './UsersApp';

// import { AppHook } from './AppHook';

// import { CFormulario } from './components/cFormulario';
// import { CUsuaeios } from './components/CUsuaeios';
// import { CCalculoPesado } from './components/CCalculoPesado';

import { BrowserRouter } from 'react-router-dom'
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <React.StrictMode>
      <Theme>
        <App></App>
        {/* <CUseCallback></CUseCallback> */}
        {/* <PrimerComponente nombre="Lauren Eve" appellidos="Mayberry"></PrimerComponente> */}
      </Theme>
    </React.StrictMode>,
  </BrowserRouter>

)
