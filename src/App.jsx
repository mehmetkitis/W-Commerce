import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { toast, ToastContainer } from 'react-toastify'
import { Camera } from 'lucide-react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {


  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  )
}

export default App
