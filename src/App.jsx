import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './Components/Share/Footer/Footer'
import Header from './Components/Share/Header/Header'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast';

function App() {
  const {pathname} = useLocation()
  useEffect(()=>{
    window.scrollTo({top: 0})
  },[pathname])

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </>
  )
}

export default App
