import React from 'react';
import Header from './Componentes/Header';
import MainContainHome from './Componentes/MainContainHome';
import SobreNos from './Componentes/SobreNos';
import Contato from './Componentes/Contato';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <MainContainHome />
        </>
      ) 
    },
    {
      path: "/sobre-nos",
      element: (
        <>
          <Header />
          <SobreNos />
        </>
      ) 
    },
    {
      path: "/contato",
      element: (
        <>
          <Header />
          <Contato />
        </>
      ) 
    },

  ])


  return (
      <RouterProvider router={router}></RouterProvider>
  )
}

export default App
