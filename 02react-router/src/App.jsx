import { useState } from 'react'
import Header from './components/Header'
import Home from './components/home'
import About from './components/About'
import Contact from './components/Contact'
import Github from './components/Github'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header/><Home/>
    </>
    },

    {
      path:"/about",
      element: <><Header/><About/>
    </>
    },
    {
      path:"/contact",
      element: <><Header/><Contact/>
    </>
    },
    {
      path:"/github",
      element: <><Header/><Github/>
    </>
    },
  ])

  return (

    <>
    <RouterProvider router={router}/>
    </>
    
  )
}

export default App
