// src/AppRouter.tsx
import React,{useState} from 'react';
import './css/App.css'
import { createBrowserRouter, data, RouterProvider } from "react-router-dom";
import DashboardPage from "./dashboard/DashboardPage"; 
import Layout from './Layout';
import LogingPage from './Login/LoginPage';
import path from 'path';


const routes = [{
    path: "/",
    element: <Layout/>,
    children:[
        {
            index: true,
            element:<DashboardPage/>
        },
    {
        path:"DashboardPage",
        element:<DashboardPage/>
    }]
}]





const router = createBrowserRouter(routes);

const AppRouter: React.FC = () => {
    
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState<string|null>(null);
    
    const handelLoginSucess = (data:{ email : string , password : string}) => {
        setLoggedIn(true);
        setUserEmail(data.email);
        console.log("Navigation trigger");
    }

    return (
        <div className='App-header'>
                    {isLoggedIn?(
                        <RouterProvider router={router}/> 
                    ):(
                        <LogingPage
                         onLoginSuccess={handelLoginSucess}/>
                    )}
        </div>
    );
};

export default AppRouter;