import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Blog from './Components/Blog/Blog.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import ChefRecipies from './Components/Chef Recipies/ChefRecipies.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import ErrorPage from "./Components/Error/error-page.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,

    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/chef/:id",
        element: <PrivateRoute> <ChefRecipies></ChefRecipies> </PrivateRoute> ,
        loader:() =>fetch(`https://bangladeshi-cuisine-server-tokymahmud.vercel.app/chef`)
      }


    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />


    </AuthProviders>

  </React.StrictMode>,
)
