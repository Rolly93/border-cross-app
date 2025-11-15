from pathlib import Path
from pydantic import BaseModel
from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse # Needed for serving index.html

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_methods=["*"],
    allow_headers=["*"],
)



MOCK_EMAIL = "user@example.com"
MOCK_PASSWORD = "123"

class LoginRequest(BaseModel):
    email: str
    password: str



@app.get("/DashboardPage")
def get_data():
    return {"message": "Hello from FastAPI"}


@app.post("/login")
def login(credentials: LoginRequest): 
    if credentials.email == MOCK_EMAIL and credentials.password == MOCK_PASSWORD:
        return {"message": "Login Successful", "user": credentials.email}
    
    raise HTTPException(status_code=401, detail="Invalid Email or password")


def enable_prod_static():
    dist_dir = Path(__file__).resolve().parent.parent.parent / "frontend" / "build"
    
    print(dist_dir)
    if dist_dir.is_dir():
        print(f"Serving static files from: {dist_dir}")
        
        app.mount("/static", StaticFiles(directory=dist_dir / "static"), name="static_files")


        @app.get("/{full_path:path}", include_in_schema=False)
        def serve_index_html(full_path: str):
            return FileResponse(dist_dir / "index.html")
    else:
        print("Static directory not found. Assuming development mode.")
