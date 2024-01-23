import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layouts/Layout'
import AddPage from './Pages/Add Page'
import BasketPage from './Pages/Basket Page'
import DetailPage from './Pages/Detail Page'
import Home from './Pages/Home Page'
import WishlistPage from './Pages/Wishlist Page'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/add' element={<AddPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/basket' element={<BasketPage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
