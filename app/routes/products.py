import app.lib.utils
from fastapi import APIRouter, Depends
from app.schemas.products import ProductFilterModel, ProductResponseModel
from app.db import Product
import re
from app.models.product_helper import product_by_filter

router = APIRouter()


@router.get(
    "/all-products",
    response_model=ProductResponseModel,
    response_model_exclude_unset=True
)
async def all_products(filter: ProductFilterModel = Depends()):
    query = {}
    if filter.search:
        query["title"] = {"$regex": re.compile(filter.search)}
    if filter.title:
        query["title"] = {"$search": filter.title}

    if filter.category:
        query["category"] = {"$eq": filter.category.lower()}
    if filter.categories:
        query["category"] = {"$in": filter.categories.split(',')}
    # if filter.brand:
    #     query["brand"] = {"$eq": filter.brand.lower()}
    # if filter.brands:
    #     query["brand"] = {"$in": filter.brands}

    if filter.min_price:
        query["price"] = {"$gte": filter.min_price}
    if filter.max_price:
        query["price"] = {"$lte": filter.max_price}

    # return filter
    (total, products) = await product_by_filter(query, filter)
    return {
        'total': total,
        'products': products
    }
