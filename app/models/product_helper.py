from app.db import Product, serializeList


async def product_by_filter(query: dict, filter):
    products = []

    print("Product count by filter")

    total = await Product.count_documents(query)
    products_lists = Product.find(query).sort(filter.sort_by, 1 if filter.descending is True else -1).skip(filter.page).limit(filter.limit)
    products = await products_lists.to_list(length=10000)
    return (total, serializeList(products))
    # async for product in Product.find(query).sort(
    #     filter.sort_by, 1 if filter.descending is True else -1
    # ).skip(filter.page).limit(filter.limit):
    #     product["_id"] = str(product["_id"])
    #     products.append(product)
    # print("Here")
    # return (total, products)
