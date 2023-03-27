import Home from "./pages/Home/Home"
import PageNotFound from "./pages/404/404"
const routes =[
  {
        path:'/' ,element:<Home/>
  },
  {
    path:'/*' ,element:<PageNotFound/>
},
]
export default routes