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

Rename the `.env.example` to `.env`. The postgres url is a valid url, but you can change it if you'd like. In the end, your `.env` file should look something like this:

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
