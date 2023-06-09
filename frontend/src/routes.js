
import Home from "./pages/Home/Home"
import PageNotFound from "./pages/404/404"
import ProductPage from './pages/ProductPage/ProductPage'
import Category from "./pages/Category/Category"
import Login from './pages/Login/Login'
import SignUp from "./pages/SignUp/SignUp"
import ContactUs from './pages/Contact-Us/ContactUs'

const routes = [
  {
    path: '/', element: <Home />
  },
  {
    path: '/*', element: <PageNotFound />
  },
  {
    path: '/Product/:id', element: <ProductPage />
  },
  {
    path: '/Category', element: <Category />
  },
  {
    path: '/Login', element: <Login />
  },
  {
    path: '/SignUp', element: <SignUp />
  },
  {
    path: '/ContactUs', element: <ContactUs />
  }
]
export default routes;