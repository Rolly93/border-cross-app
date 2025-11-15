import Header from "../Components/Header"
import { IShipment } from "../core/ShipmentModel"

const API_URL = "http://localhost:8000/api/dashboard-data";

const getShipments = async (): Promise<IShipment[]> => {
 try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

     if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);}

        const data:IShipment[] = await response.json()
        return data;
    
        } 
catch (error) {
    console.error(error);
    throw(error)
 }
};




export  default  function DashboardPage() {
const tableHeader =(
          <thead>
                        <tr>
                            <th >Referencia</th>
                            <th>Tracking Number</th>
                            <th>Cliente</th>
                            <th>Trailer</th>
                            <th>Operaction</th>
                            <th>Unit truck</th>
                            <th>Pick Up</th>
                            <th>Deliver</th>
                            <th>Arrvial Pick Up</th>
                            <th>Depoarture</th>
                            <th>Inspecciont Mx Customs</th>
                            <th>New Seal</th>
                            <th>Clear Customs Mx</th>
                            <th>Inspection USa Customs</th>
                            <th>Type Inspection</th>
                            <th>New Seal</th>
                            <th>Safety Yard</th>
                            <th>Yard Name</th>
                            <th>Deliver</th>
                            <th>Recive</th>
                        </tr>
                    </thead>
)
    return (<>
    
                <Header title="Shipment Tracker"/>
        <main>

            <div >
                <table >
                  {tableHeader}
                    <tbody>
                        <tr>
                            <td >
                                SMT-12345
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main></>
    )
}