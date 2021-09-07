from libs.render import render
from api.router import user_router, doc_router

from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from fastapi.middleware.gzip import GZipMiddleware


app = FastAPI(docs_url='/api/docs/v1/')
app.add_middleware(GZipMiddleware, minimum_size=100)

#-----------------------------------------------------------------------------#
#------------------------------Assets endpoints-------------------------------#
#-----------------------------------------------------------------------------#

def render_assets(path_to_file):
    def read_file():
        with open(path_to_file, mode='rb') as file:
            yield file.read()
    return StreamingResponse(read_file())

@app.get('/build/main.js', include_in_schema=False)
def get_js():
    return render_assets('./build/main.js')

@app.get('/build/main.css', include_in_schema=False)
def get_css():
    return render_assets('./build/main.css')

#-----------------------------------------------------------------------------#
#------------------------------SSR endpoints----------------------------------#
#-----------------------------------------------------------------------------#

@app.get("/", include_in_schema=False)
def main_page():
    return StreamingResponse(render([]), media_type='text/html')

@app.get("/news", include_in_schema=False)
def news_page():
    return StreamingResponse(render({ "view": "index" }), media_type='text/html')

#-----------------------------------------------------------------------------#
#-------------------------API endpoints with router---------------------------#
#-----------------------------------------------------------------------------#

app.include_router(user_router)
app.include_router(doc_router)
