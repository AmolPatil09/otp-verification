import { useState } from 'react'
import LoginWithOTP from './loginWithOTP'
import VerifyOTP from './VerifyOTP'
import Autherize from './Autherize'
import UnAutherize from './UnAutherize'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/loginwithotp' element={<LoginWithOTP/>}/>
        <Route path='/verifyotp' element={<VerifyOTP/>}/>
        <Route path='/dashbord' element={<Autherize/>}/>
        <Route path='/unauthrize' element={<UnAutherize/>}/>
        <Route path='' element={<Navigate to='/loginwithotp'/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
