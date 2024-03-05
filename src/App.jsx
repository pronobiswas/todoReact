import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider, Outlet
} from "react-router-dom";
import './App.css'

import RootLayout from './Component/Layout/RootLayout'
import HomePage from './Pages/Home/HomePage';
import ContactComponent from './Component/ContactComponent/ContactComponent';
import BlogComponent from './Component/BlogComponemt/BlogComponent';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element= {<RootLayout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/contact' element={<ContactComponent/>}/>
          <Route path='/blog' element={<BlogComponent/>}/>
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider
        router={router}
      />
    </>
  )
}

export default App
