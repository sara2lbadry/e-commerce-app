import Home from "./pages/Home"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Regsiter from "./pages/Register"
import { useSelector } from "react-redux";

function App() {
  // const user = useSelector(state => state.user.currentUser) 
  const user = true
  return (
    <Router>
      <Routes>
        <Route path = "/" exact element = {<Home />}></Route>
        <Route path = "/products"  element = {<ProductList />}></Route>
        <Route path = "/products/:cat"  element = {<ProductList />}></Route>
        <Route path = "/product/:id" element = {<Product />}></Route>
        <Route path = "/cart"  element = {<Cart />}></Route>
        <Route path = "/login" element = {user ? <Navigate to="/" /> : <Login />}></Route>
        <Route path = "/regsiter" element = {<Regsiter />}></Route>
      </Routes>
    </Router>
  )
}

export default App