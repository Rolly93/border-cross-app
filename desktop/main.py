import sys
import uvicorn
import webview
import asyncio
import threading
from pathlib import Path

current_dir = Path(__file__).resolve().parent
project_root =  current_dir.parents[0]
sys.path.append(str(project_root))

from backend.app.main import app , enable_prod_static
enable_prod_static()

server = None
def start_api():
    global server
    config = uvicorn.Config(
        app, host='127.0.0.1',
        port=8000,
        log_level='info'
    )
    
    server = uvicorn.Server(config=config)
    
    server.run()
    """Starts the FastAPI server."""
    # Run Uvicorn without blocking the main thread
    # host='127.0.0.1' and port=8000 are standard defaults
    uvicorn.run()
def stop_api():
    global server
    
    if server:
        server.should_exit = True

if __name__ == '__main__':
    # 1. Start the FastAPI server in a background thread
    t = threading.Thread(target=start_api)
    t.daemon = True # Allows the thread to be killed when the main program exits
    t.start()

    # 2. Start the Pywebview window
    #    The URL must point to the address where the FastAPI server is running.
    window = webview.create_window(
        'My Desktop App with FastAPI', 
        'http://127.0.0.1:8000/',
        width=1000,
        height=600
    )
    window.events.closed += stop_api
    
    webview.start()
    
    # Optional: Stop the thread/server cleanly when webview closes
    # (Handling clean shutdown can be complex, but essential for production)