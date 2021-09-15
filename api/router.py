from fastapi_crudrouter import MemoryCRUDRouter as CRUDRouter
from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from .schemas import User


user_router = CRUDRouter(prefix="/api/user", schema=User, get_all_route=False, delete_all_route=False)
assets_router = APIRouter()

@assets_router.get('/build/main.js', include_in_schema=False)
def get_js():
    return render_assets('./build/main.js')

@assets_router.get('/build/main.css', include_in_schema=False)
def get_css():
    return render_assets('./build/main.css')

def render_assets(path_to_file):
    def read_file():
        with open(path_to_file, mode='rb') as file:
            yield file.read()
    return StreamingResponse(read_file())
