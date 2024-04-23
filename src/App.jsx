import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import './styles/globel.scss';
import Home from './pages/home/Home'
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import LoginForm from "./pages/login/Login";

function App() {
  const Layout =()=>{
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
              <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet>

            </Outlet>
          </div>
          
        </div>
        <Footer/>
      </div>
    )
  }



  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
       { path:'/',
        element:<Home/>
      },
       { path:'/users',
        element:<Users/>
      },
       { path:'/products',
        element:<Products/>
      }
      ]
    },{
      path:"/login",
      element:<LoginForm/>
    }
    
  ]);

  return <RouterProvider router={router}/>
}

export default App
