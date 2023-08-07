import { useState, useRef } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Sidebar_Nav from './Components/Sidebar_Nav/Sidebar_Nav'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Mens from './Pages/Collections/Mens/Mens';



function App() {

  const [isToggleOpen, setIsToggleOpen] = useState(false);
  // const isToggleOpen = useRef(false)
  
  const handleToggle = () => setIsToggleOpen(!isToggleOpen)
 
  // const ref = useRef(false)

//   function handleToggle() {
//     isToggleOpen.current = !isToggleOpen.current
// }


 

  const Layout = () => {
    return (
      <div className="app">
        
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home 
          isToggleOpen={isToggleOpen}
          handleToggle={handleToggle}/>,
         },
        {
          path: "/mens",
          element: <Mens />
         },
      ]
    }
  ])

  

  return (
    <div className='body-container' >
      <div>
        <RouterProvider router={router} />
      </div>

    </div>
  )
}

export default App
/* <div className="hero">
        <Sidebar_Nav 
          isToggleOpen={isToggleOpen}
          handleToggle={handleToggle}
        />
        <Header handleToggle={handleToggle} />
      </div> */