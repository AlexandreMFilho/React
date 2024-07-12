import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Evolucoes from '../views/Evolucoes.jsx'
import Ginasios from '../views/Ginasios.jsx'
import Home from '../views/Home.jsx'
import Pokedex from '../views/Pokedex.jsx'
import Pokemon from '../views/Pokemon.jsx'
import './index.css'
import './App.css'
import App from './App.jsx'

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  children:[
    {
      path:"/Home",
      element: <Home />
    },
    {
      path:"/pokedex",
      element: <Pokedex />
    },
    {
      path:"/pokedex/:id",
      element: <Pokemon />
    },
    {
      path:"/pokedex/:id/evolucoes",
      element: <Evolucoes />
    },
    {
      path:"/ginasios",
      element: <Ginasios />
    },
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
