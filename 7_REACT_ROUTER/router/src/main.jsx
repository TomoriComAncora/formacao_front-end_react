import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contact from './routes/Contact.jsx'

// 1 configurando router
import {createBrowserRouter, RouterProvider, Route, Navigate} from "react-router-dom";

// 2 pagina de erro
import ErrorPage from './routes/ErrorPage.jsx'

// 3 componente base
import Home from './routes/Home.jsx'
// 7 rota dinâminca
import Product from './routes/Product.jsx'
// 8 rota aninhada
import Info from './routes/Info.jsx'
// 9 search
import Search from './routes/Search.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      // 7 rota dinâmica
      {
        path: "products/:id",
        element: <Product/>
      },
      // 8 rotas aninhadas
      {
        path: "products/:id/info",
        element: <Info/>,
      },
      // 9 search
      {
        path: "search",
        element: <Search/>,
      },
      // 10 redirect
      {
        path: "teste",
        element: <Navigate to={"/contact"}/>
      }
    ]
  },
  // {
  //   path: "contact",
  //   element: <Contact/>
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
