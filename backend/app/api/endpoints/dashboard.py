from fastapi import APIRouter
from ....app.model.shipmet import DashboardResponse
from ....app.api.endpoints.services.shipment_service import get_shipment_data

router = APIRouter(prefix="/api")

@router.get("/dashboard-data",
            response_model=DashboardResponse)
def get_dashboard_data():
    """
    Fetches the data required for the shipment tracking dashboard.
    """
    shipments = get_shipment_data()
    print(shipments)
    return {"data":shipments}