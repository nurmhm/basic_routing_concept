import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componets/Home/Home.jsx';
import Contact from './componets/Contact/Contact.jsx';
import About from './componets/About/About.jsx';
import Users from './componets/Users/Users.jsx';
import UserDetails from './componets/UserDetails/UserDetails.jsx';
import Posts from './componets/Posts/Posts.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,

//   },
//   {

//     path: "/about",
//     element: <div>this is about page</div>
//   }
// ]);



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children:[
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/users",
        // loader: ()=>fetch("https://jsonplaceholder.typicode.com/users"),
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        render: Users,
        element: <Users></Users>
      },
      {
        path:"/user/:userId",
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
       
        element: <UserDetails></UserDetails>
      },

      {
        path:"posts/",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      }

    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)