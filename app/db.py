from motor import motor_asyncio
from decouple import config

client = motor_asyncio.AsyncIOMotorClient(config('MONGO_URL'))
db = client["fast-com"]      

# Models
User = db.get_collection("users")
Product = db.get_collection('products')
Category = db.get_collection('categories')