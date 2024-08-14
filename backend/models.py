from sqlmodel import Field, SQLModel


class Todo(SQLModel, table=True):
    id: int = Field(primary_key=True)
    number: int
    description: str
