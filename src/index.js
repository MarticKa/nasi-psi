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
import Queenie from './routes/queenie/queenie';
import Homepage from './routes/homepage/homepage';
import Layout from './components/layout';
import Isaac from './routes/isaac/isaac';
import Ariana from './routes/ariana/ariana';
import Lilith from './routes/lilith/lilith';
import VrhA from './routes/vrh-a';
import Puppies from './routes/stenatka';
import OurDogs from './routes/nasiPsi';
import About from './routes/about-samojed';
import Standard from './routes/standard';
import StandardLap from './routes/standard-lapphund';
import Health from './routes/health';
import Sport from './routes/sport';
import SportLap from './routes/sport-lapphund';
import PracticStandard from './routes/practicStandard';
import AboutLap from './routes/about-lapphund';


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
        path: "/lilith",
        element: <Lilith/>,
      },
      {
        path: "/vrh-a",
        element: <VrhA/>,
      },
      {
        path: "/standard",
        element: <Standard/>,
      },
      {
        path: "/standard-lapphund",
        element: <StandardLap/>,
      },
      {
        path: "/nasi-psi",
        element: <OurDogs/>,
      },
      {
        path: "/about-samojed",
        element: <About/>,
      },
      {
        path: "/about-lapphund",
        element: <AboutLap/>,
      },
      {
        path: "/health",
        element: <Health/>,
      },
      {
        path: "/sport",
        element: <Sport/>,
      },
      {
        path: "/sport-lapphund",
        element: <SportLap/>,
      },
      {
        path: "/practic",
        element: <PracticStandard/>,
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
