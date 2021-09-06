from libs.render import render
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.responses import StreamingResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.gzip import GZipMiddleware


app = FastAPI(docs_url='/api/docs/v1/')
app.add_middleware(GZipMiddleware, minimum_size=100)
# app.mount("/build", StaticFiles(directory="build"), name="build")

@app.get('/build/main.js', include_in_schema=False)
def get_js():
    def read_file():
        with open('./build/main.js', mode='rb') as file:
            yield file.read()
    return StreamingResponse(read_file())


@app.get('/build/main.css', include_in_schema=False)
def get_js():
    def read_file():
        with open('./build/main.css', mode='rb') as file:
            yield file.read()
    return StreamingResponse(read_file())

@app.get("/", include_in_schema=False)
def main_page():
    return StreamingResponse(render(), media_type='text/html')

@app.get('/posts')
def posts():
    return { 'id': 1, 'name': 'awd' }
