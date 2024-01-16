from app.db import Product


async def product_by_filter(query: dict, filter):
    products = []

    print("Product count by filter")
    total = await Product.count_documents(query)
    async for product in Product.find(query).sort(
        filter.sort_by, 1 if filter.descending is True else -1
    ).skip(filter.page).limit(filter.limit):
        product["_id"] = str(product["_id"])
        products.append(product)
    return (total, products)
