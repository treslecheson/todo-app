from sqlmodel import select, Session

from models import Todo
from schemas import CreateTodoRequest


def get_todos(db: Session) -> list[Todo]:
    return db.exec(select(Todo)).all()


def create_todo(db: Session, todo: CreateTodoRequest) -> Todo:
    db_todo: Todo = Todo(**todo.model_dump())
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo
