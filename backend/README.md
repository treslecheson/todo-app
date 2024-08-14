# Todo App - Backend

## Setup

Create virtual environment:

```bash
python -m venv .venv
```

Activate environment:

```bash
source .venv/bin/activate
```

Install requirements:

```bash
pip install -r requirements.txt
```

Create `.env` file:

```bash
DATABASE_URL=postgresql://postgres:postgres@0.0.0.0:5432/customtodos
```

Create database:

```bash
createdb customtodos
```

Migrate database with alembic:

```bash
alembic upgrade head
```

Start app:

```
uvicorn main:app --reload
```
