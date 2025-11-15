import Header from "./Header"
import  {IShipment}  from '../types/ShipmentModel';
import  getShipments from '../services/shipmentService';
import React, { useState, useEffect } from 'react';

interface DashboardState {
    shipments: IShipment[];
    loading: boolean;
    error: string | null;
}

export  default  function DashboardPage() {

const [state, setState] = useState<DashboardState>({
        shipments: [],
        loading: true,
        error: null,
    });

    // Effect to handle data fetching
    useEffect(() => {
        const fetchShipments = async () => {
            try {
                // Call the clean service function
                const data = await getShipments();
                
                setState({ 
                    shipments: data, 
                    loading: false, 
                    error: null 
                });
            } catch (err) {
                console.error("Error fetching data:", err);
                setState({ 
                    shipments: [], 
                    loading: false, 
                    error: "Failed to load shipment data." 
                });
            }
        };

        fetchShipments();
    }, []); 

    // --- Conditional Rendering ---
    if (state.loading) {
        return <div className="loading">Loading shipment data...</div>;
    }

    if (state.error) {
        return <div className="error-message">Error: {state.error}</div>;
    }

    const tableHeader =(
          <thead>
                        <tr>
                            <th>Referencia</th>
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
                        {/**I must use state */}
                    </tbody>
                </table>
            </div>
        </main></>
    )
}