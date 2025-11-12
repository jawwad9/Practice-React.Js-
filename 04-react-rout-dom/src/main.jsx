import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './screens/Home.jsx'
import About from './screens/About.jsx'
import Contact from './screens/Contact.jsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "Home",
        element: <Home/>,
      },
      {
        path: "About",
        element: <About/>,
      },
      {
        path: "Contact",
        element: <Contact/>,
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
<RouterProvider router={route}>
      <App />
</RouterProvider>
)
