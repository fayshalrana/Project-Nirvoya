import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Share/Footer/Footer'
import Header from './Components/Share/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
