# app/models/shipment.py
from pydantic import BaseModel
from typing import Dict, List, Optional

class ShipmentResponse(BaseModel):
    index: int
    myReference: str
    clientReference: str
    operationType: str
    unit_truck: str
    trailer: str
    pickupFrom: str
    deliverTo: str
    event: Dict[str, str]
    comments: str
    client: str
    inspection: Dict[str, str]
    new_seal: Dict[str, str]
    safetyYard: str
    safetyYardName: str

class DashboardResponse(BaseModel):
    data: List[ShipmentResponse]