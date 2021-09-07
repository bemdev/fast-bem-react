from fastapi_crudrouter import MemoryCRUDRouter as CRUDRouter
from .schemas import User, Doc


user_router = CRUDRouter(prefix="/api/user", schema=User, get_all_route=False, delete_all_route=False)
doc_router = CRUDRouter(prefix="/api/doc",schema=Doc, get_all_route=False, delete_all_route=False)
