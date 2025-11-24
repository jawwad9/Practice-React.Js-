import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Screens/Home.jsx'
import About from './Screens/About.jsx'
import SinglePage from './Screens/SinglePage.jsx'
import Contact from './Screens/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "Home",
        element: <Home/>
      }, {
        path: "About",
        element: <About/>
      }, {
        path: "Contact",
        element: <Contact/>
      }, {
        path: "SinglePage/:id",
        element: <SinglePage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
