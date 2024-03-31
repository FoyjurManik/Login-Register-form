import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Error from './component/Error';
import Root from './component/Root';
import Home from './component/Home';

import SignIn from './component/SignIn';
import Register from './component/Register';
import Loginemail from './component/Loginemail';
import Login from './component/Logingoogle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/logingoogle',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/loginemail',
        element: <Loginemail></Loginemail>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


