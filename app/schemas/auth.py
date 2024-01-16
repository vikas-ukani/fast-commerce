from pydantic import BaseModel, Field, EmailStr
from app.schemas.user import UserBaseSchema


class LoginSchema(BaseModel):
    email: EmailStr
    password: str
    
    model_config = {
        "json_schema_extra": {
            'example': {
                'email': 'vikas@gmail.com',
                'password': 'password'
            }
        }
    }


class SignUpSchema(UserBaseSchema):
    name: str = Field()
    email: EmailStr = Field()
    password: str = Field()
    password_confirm: str = Field()

    model_config = {
        "json_schema_extra": {
            "example": {
                    "name": "Vikas Ukani",
                    "email": "vikasukani5@gmail.com",
                    "password": "password",
                    "password_confirm": "password",
                }
        }
    }
