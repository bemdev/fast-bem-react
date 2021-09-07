from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class User(BaseModel):
    id: int
    name: str
    signup_ts: Optional[datetime] = None
    friends: int

class Doc(BaseModel):
    id: int
    authorId: int
    text: str
    title: str