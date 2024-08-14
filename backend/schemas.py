from pydantic import BaseModel


class CreateTodoRequest(BaseModel):
    number: int
    description: str
