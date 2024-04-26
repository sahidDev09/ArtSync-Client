
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className=' container mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
