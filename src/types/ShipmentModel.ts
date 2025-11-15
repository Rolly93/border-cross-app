export type IShipment = {
    index: number;
    myReference: string;       
    clientReference: string;
    operationType: string;     
    unit_truck: string;
    trailer: string;
    pickupFrom: string;        
    deliverTo: string;
    comments: string;
    client: string;
    safetyYard: string;
    safetyYardName: string;    
    event: { [key: string]: string };
    inspection: { [key: string]: string }; 
    new_seal: { [key: string]: string };
};

export interface DashboardServerResponse{
    data : IShipment[];
}