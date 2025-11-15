import sys
from pathlib import Path
from typing import Dict , List
from pydantic import BaseModel , Field
from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_methods=["*"],
    allow_headers=["*"],
)

current_dir = Path(__file__).resolve().parent
project_root =  current_dir.parents[0]

print(current_dir.parents[0])
from backend.app.api.endpoints import dashboard

print(project_root)
sys.path.append(str(project_root))

app.include_router(dashboard.router)


MOCK_EMAIL = "user@example.com"
MOCK_PASSWORD = "123"

class LoginRequest(BaseModel):
    email: str
    password: str






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
