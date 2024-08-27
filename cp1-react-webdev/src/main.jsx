import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import MainContainHome from './Componentes/MainContainHome.jsx'
import SobreNos from "./Componentes/SobreNos.jsx";
import Contato from "./Componentes/Contato.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index:true, element: <MainContainHome/>},
      {path:'sobre', element: <SobreNos/>},
      {path:'contato', element: <Contato/>}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
