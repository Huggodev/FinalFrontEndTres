import ContextProvider from './components/utils/global.context'
import { Routes, Route } from 'react-router-dom'

import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <ContextProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dentist/:id' element={<Detail />} />
          <Route path='/favs' element={<Favs />} />
        </Routes>
        <Footer />
      </div>
    </ContextProvider>
  )
}

export default App
