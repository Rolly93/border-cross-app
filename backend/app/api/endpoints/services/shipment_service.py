from typing import List , Dict
from pydantic import BaseModel
from .....app.model.shipmet import ShipmentResponse
def get_shipment_data() -> List[ShipmentResponse]:
    """"Simulate fetching multiple shipmet records"""
    
    sample_shipmet_dict = {
        "index": 1,
        "myReference": "MX-12345",
        "clientReference": "CR-9876",
        "operationType": "Export",
        "unit_truck": "TR-A101",
        "trailer": "TL-B202",
        "pickupFrom": "Monterrey",
        "deliverTo": "Laredo, TX",
        "event": {"AFS": "11/15/2025 10:30" , "DPU": "11/15/2025 11:00"},
        "comments": "Waiting on Customs release.",
        "client": "MegaCorp",
        "inspection": {"MX": "11/15/2025 12:00"},
        "new_seal": {"mx_seal": "8888"},
        "safetyYard": "N/A",
        "safetyYardName": "Yardside A"
    }
    
    shipment_list = [sample_shipmet_dict,
                    {**sample_shipmet_dict,
                     "index":2,"myReference": "92B1358", "operationType": "Import"
                     }
                    ]
    return[ShipmentResponse(**data) for data in shipment_list]