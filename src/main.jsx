import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';

import Home from './routes/Home/Home.jsx';

import ErroPage from './routes/ErrorPage/ErroPage.jsx';
import AddCategory from './routes/AddCategory/AddCategory.jsx';
import AddItem from './routes/AddItem/AddItem.jsx';


import AllCategories from './routes/AllCategories/AllCategories.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Home />,
        path: '/'
      },
      {
        element: <AddCategory />,
        path: '/add-categoria'
      },
      {
        element: <AddItem />,
        path: '/add-item'
      },
      {
        element: <AllCategories/>,
        path: '/todas-categorias'
      }
    ],
    errorElement: <ErroPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
