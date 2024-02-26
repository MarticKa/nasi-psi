import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import './poppins.css';

import ErrorPage from "./routes/error-page";
import reportWebVitals from './reportWebVitals';
import Contact from './routes/contact';
import Queenie from './routes/queenie';
import Homepage from './routes/homepage/homepage';
import Layout from './components/layout';
import Isaac from './routes/isaac';
import Ariana from './routes/ariana/ariana';
import VrhA from './routes/vrh-a';
import AboutBreed from './routes/o-plemeni';
import Puppies from './routes/stenatka';

const router = createHashRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/kontakty",
        element: <Contact/>,
      },
      {
        path: "/queenie",
        element: <Queenie/>,
      },
      {
        path: "/isaac",
        element: <Isaac/>,
      },
      {
        path: "/stenatka",
        element: <Puppies/>,
      },
      {
        path: "/ariana",
        element: <Ariana/>,
      },
      {
        path: "/vrh-a",
        element: <VrhA/>,
      },
      {
        path: "/o-plemeni",
        element: <AboutBreed/>,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
