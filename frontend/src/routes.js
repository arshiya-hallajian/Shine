import Home from "./pages/Home/Home"
import PageNotFound from "./pages/404/404"
import ProductPage from './pages/ProductPage/ProductPage'
import Category from "./pages/Category/Category"
import ContactUS from './pages/Contact-Us/ContactUs'
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
  },
  {
    path: '/ContactUS', element: <ContactUS />
  }
]
export default routes