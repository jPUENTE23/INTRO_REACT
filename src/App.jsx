
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { NavbarComponent } from './components/NavbarComponent'
import { HomeRoute } from './Routes/HomeRoute'
import { ContactRoute } from './Routes/ContactRoute'
import { AbaoutRoute } from './Routes/AbaoutRoute'
import { UsuarioProvider } from './Context/UsuarioProvider'
import { LoginRoute } from './Routes/LoginRoute'

export const App = () => {

  return (
    <UsuarioProvider>
      <NavbarComponent></NavbarComponent>

      <Routes>
        <Route path='/' element={<HomeRoute></HomeRoute>}></Route>
        <Route path='/Login' element={<LoginRoute></LoginRoute>}></Route>

        <Route path='/abaout' element={<AbaoutRoute></AbaoutRoute>}></Route>

        <Route path='/contact' element={<ContactRoute></ContactRoute>}></Route>

        <Route path='/*' element={ <Navigate to='/'/>}></Route>
      </Routes>

    </UsuarioProvider>
  )
}

