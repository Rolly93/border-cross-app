// src/AppRouter.tsx
import React,{useState ,useEffect} from 'react';

import './css/App.css'
import {useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./dashboard/DashboardPage"; 
import Layout from './Layout';
import LogingPage from './Login/LoginPage';
import {LoginFormState} from './types/Shipment';

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "DashboardPage",
        element: <DashboardPage />,
      },
    ],
  },
];




const router = createBrowserRouter(routes);

const AppRouter: React.FC = () => {
    
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
    const [userEmail, setUserEmail] = useState<string|null>(null);

    const handelLoginSucess = (data: LoginFormState) => {
        console.log("Login Success Callback:", data);
        setLoggedIn(data.isValidUser );
        setUserEmail(data.email);
        console.log("Navigation trigger");
    }

    return (

        <div className='App-header'>
                     {isLoggedIn?(
                         <RouterProvider
                         router={router}/> 
                    ):(
                         <LogingPage
                          onLoginSuccess={handelLoginSucess}/>
                     )}
        </div>
    );
};

export default AppRouter;