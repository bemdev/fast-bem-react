from libs.render import render
from api.router import user_router, assets_router

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import StreamingResponse
from fastapi.middleware.gzip import GZipMiddleware


app = FastAPI(docs_url='/api/docs/v1/')
app.add_middleware(GZipMiddleware, minimum_size=100)
app.mount("/public", StaticFiles(directory="public"), name="public")

#-----------------------------------------------------------------------------#
#--------------------------Assets endpoints with router-----------------------#
#-----------------------------------------------------------------------------#

app.include_router(assets_router)

#-----------------------------------------------------------------------------#
#------------------------------SSR endpoints----------------------------------#
#-----------------------------------------------------------------------------#

@app.get("/", include_in_schema=False)
def main_page():
    return StreamingResponse(render([]), media_type='text/html')

@app.get("/docs", include_in_schema=False)
def docs_page():
    return StreamingResponse(render({ "view": "docs" }), media_type='text/html')

#-----------------------------------------------------------------------------#
#-------------------------API endpoints with router---------------------------#
#-----------------------------------------------------------------------------#

app.include_router(user_router)
