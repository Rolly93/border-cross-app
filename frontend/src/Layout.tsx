import { Outlet, Route, Routes } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";



export default function Layout (){
    return (
        < >
            <NavigationLinks/>  
            <Outlet/>
        </>
    );
};
    