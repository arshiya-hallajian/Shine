import Home from "./pages/Home/Home";
import PageNotFound from "./pages/404/404";
import ProductPage from './pages/ProductPage/ProductPage';
import Category from "./pages/Category/Category";
import Login from './pages/login-signup/Login';
import SignUp from "./pages/SignUp/SignUp";

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
    path: '/SignUp', element: <SignUp />
  }
]
export default routes;