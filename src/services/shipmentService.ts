import { IShipment , DashboardServerResponse } from "../types/ShipmentModel"


const API_URL = "http://localhost:8000/api/dashboard-data";

const getShipments = async (): Promise<IShipment[]> => {
 try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

     if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);}

        const body:DashboardServerResponse = await response.json()
        return body.data;

    
        } 
catch (error) {
    console.error(error);
    throw(error)
 }
};
export default getShipments;
