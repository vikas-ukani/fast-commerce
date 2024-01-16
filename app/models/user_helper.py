from ..db import User
from bson.objectid import ObjectId


def user_helper(user) -> dict:
    return {
        "_id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"],
        # "password": user["password"],
        "photo": user["photo"],
        "created_at": user["created_at"],
        "updated_at": user["updated_at"],
    }


async def get_users() -> list:
    users = []
    async for user in User.find():
        users.append(user_helper(user))
    return users


async def create_user(user: dict) -> dict:
    user = await User.insert_one(user)
    newUser = await User.find_one({"_id": user.inserted_id})
    return user_helper(newUser)


async def get_user_by_email(email: str):
    print("Fine user by email: " + email)
    user = await User.find_one({"email": email})
    return user_helper(user) if user is not None else None


async def get_user(id: str) -> dict:
    newUser = await User.find_one({"_id": ObjectId(id)})
    return user_helper(newUser)


async def update_user(id: str, param: dict):
    if len(param) < 1:
        return False
    user = await User.find_one_and_update({"_id": ObjectId(id)}, {"$set": param})
    return True if user is not None else False


async def delete_user(id: str):
    user = User.find_one({"_id": ObjectId(id)})
    if user:
        await User.delete_one({"_id": ObjectId(id)})
        return True
    return False
