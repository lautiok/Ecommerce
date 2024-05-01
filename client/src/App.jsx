import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { ProductProvider } from './context/ProductContext'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { ContenedorList } from './components/ContenedorList'
import { Products } from './pages/Products'
import { CartContainer } from './components/CartContainer.jsx';
import { CartProvider } from './context/CartContext.jsx'
import { FormularioDeVenta } from './pages/FormulariodeVenta.jsx';
import { OrderProvider } from './context/OrderContext.jsx'
import { PedidoExitoso } from './components/PedidoExitoso.jsx'
import { Footer } from './components/Footer.jsx'
import { ProducDas } from './components/ProducDas.jsx'
import { OrderDash } from './components/OrderDash.jsx'
import { PedidoOrder } from './components/PedidoOrder.jsx'
import { FormProduct } from './components/FormProduct.jsx'
import { UpdateP } from './components/UpdateP.jsx'
import { FormLogin } from './components/FormLogin.jsx'
import { Authprovider } from './context/AuthContext.jsx'
import { ProtectRoute } from './ProtectRoute.jsx'
import { FormNewUser } from './components/FormNewUser.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <Authprovider>
    <ProductProvider>
      <CartProvider>
      <Header />
      <CartContainer />
      <OrderProvider>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ContenedorList />} />
        <Route path='/FormulariodeVenta' element={<FormularioDeVenta />} />
        <Route path='/pedidoexitoso/:id' element={<PedidoExitoso />} />
        <Route path='/login' element={<FormLogin />} />
        <Route element={<ProtectRoute />}>
        <Route path='/dashboard' element={<ProducDas />} />
        <Route path='/dashboard/orders' element={<OrderDash />} />
        <Route path='/dashboard/order/:id' element={<PedidoOrder />} />
        <Route path='/dashboard/product/add' element={<FormProduct />} />
        <Route path='/dashboard/product/:id' element={<UpdateP />} />
        <Route path='/dashboard/user/add' element={<FormNewUser />} />
        </Route>
      </Routes>
      </OrderProvider>
      <Footer />
      </CartProvider>
    </ProductProvider>
    </Authprovider>
    </BrowserRouter>
     
    </>
  )
}

export default App
