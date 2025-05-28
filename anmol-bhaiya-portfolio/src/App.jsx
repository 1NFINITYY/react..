import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Navbar from "./components/navbar";


const App = () => {
  

   const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/>
    </>
    },

    {
      path:"/about",
      element: <><Navbar/><About/>
    </>
    },
    {
      path:"/contact",
      element: <><Navbar/><Contact/>
    </>
    },
    {
      path:"/skills",
      element: <><Navbar/><Skills/>
    </>
    },
    {
      path:"/projects",
      element: <><Navbar/><Projects/>
    </>
    },
  ])

  return (

    <>
    <RouterProvider router={router}/>
    </>
    
  )
};

export default App;
