import Home from "./pages/Home/Home"
import PageNotFound from "./pages/404/404"
import ProductPage from './pages/ProductPage/ProductPage'
import Category from "./pages/Category/Category"
import Login from './pages/login-signup/Login'
const routes = [
  {
    path: '/', element: <Home />
  },
  {
    path: '/*', element: <PageNotFound />
  },
  {
    path: '/Product', element: <ProductPage />
  },
  {
    path: '/Category', element: <Category />
  },
  {
    path: '/Login', element: <Login />
  }
]
export default routes