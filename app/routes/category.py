from fastapi import APIRouter
from app.db import Category

router = APIRouter()


@router.get("/get-categories")
async def all_categories():
    categories = []
    async for category in Category.find({}):
        category["_id"] = str(category["_id"])
        categories.append(category)
    return categories
