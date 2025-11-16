from fastapi import APIRouter , HTTPException
from ...model.LoginRequest import LoginRequest

router = APIRouter()


MOCK_EMAIL = "user@example.com"
MOCK_PASSWORD = "123"

def authenticate_user(credentials: LoginRequest)-> bool:
    """Check credencial against the sotred user data (DB)"""
    if credentials.email == MOCK_EMAIL and credentials.password == MOCK_PASSWORD:
        credentials.isValidUser = True

    return credentials.isValidUser

@router.post("/login")
def login(credentials: LoginRequest):
    """Login endpoint to authenticate user"""
    if authenticate_user(credentials):
        print(credentials)
        return {"message": "Login Successful","user": credentials.email ,"isLoginValid": credentials.isValidUser }
    raise HTTPException(status_code=401, detail="Invalid Email or password")