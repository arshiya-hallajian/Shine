import Home from "./pages/Home/Home"
import PageNotFound from "./pages/404/404"
import ProductPage from "./pages/ProductPage/ProductPage"
import Category from "./pages/Category/Category"
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
  }
]
export default routes