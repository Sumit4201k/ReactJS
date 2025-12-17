import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter, createRoutesFromElements , Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import GitHub , { GithubLoader } from './Components/GIthub/Github.jsx'
import User from './Components/User/User.jsx'
// import { GithubLoader } from './Components/GIthub/Github.jsx'
// import { GithubLoader } from './Components/GIthub/Github.jsx'

// const router = createBrowserRouter(
//   [{
//     path:"/",
//     element:<Layout />,
//      children: [
//        {
//          path:"",
//          element: <Home />
//        },
      
//        {
//          path:"About",
//          element : <About/>
//        },
//        {
//         path:"Contact",
//          element : <Contact/>
//        }
//       ]

//   }
//   ] )


const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='Contact' element={<Contact/>}/>
            <Route
            
            loader= {GithubLoader}
            path='Github' 
            element={<GitHub/>}
            
            />
            <Route path='User/:userid' element={<User  />}/>

          </Route>
        )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
