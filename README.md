# shopping-cart-dashboard
Create a Shopping Cart Dashboard using JWT

# Steps

npm init -y

npm install express mongoose dotenv jsonwebtoken bcryptjs body-parser cors

npm install --save-dev nodemon


nodemon server.js or node server.js

npm install ejs

# API Endpoints

Register User (Admin or Normal)

POST /api/auth/register

Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "role": "admin" // or "normal"
}

Login User

POST /api/auth/login

Content-Type: application/json

{
  "email": "john@example.com",
  "password": "123456"
}

Get All Users (Admin Only)

GET /api/users

Headers: { "x-auth-token": "your_jwt_token" }

Add User (Admin Only)

POST /api/users/add

Headers: { "x-auth-token": "your_jwt_token" }

Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "123456",
  "role": "normal"
}

Add Product (Admin Only)

POST /api/products/add

Headers: { "x-auth-token": "your_jwt_token" }

Content-Type: application/json

{
  "name": "Laptop",
  "description": "A powerful laptop",
  "price": 1500,
  "stock": 10
}

Get All Products (Available to All)

GET /api/products

Headers: { "x-auth-token": "your_jwt_token" }

Shopping List View (Normal Users Only)

GET /api/products/list

Headers: { "x-auth-token": "your_jwt_token" }


# Product seeding

node seed.js
