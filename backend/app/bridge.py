class Bridge:
    def ping(self) -> str:
        return "pong from Python"

    def get_server_data(self):
        # Could read DB, files, etc.
        return {"status": "ok", "source": "pywebview bridge"}