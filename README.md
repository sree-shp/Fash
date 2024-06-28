# Fash - E-commerce Platform

Fash is a comprehensive e-commerce platform for clothing and lifestyle products, built with the MERN stack (MongoDB, Express, React, Node.js). The platform features secure user authentication and authorization using JWT and provides a seamless shopping experience with various product discovery methods.

## Features

- **Product Discovery**: Users can find products through search, categories (Men, Women, Lifestyle, Kids), subcategories, and end-of-season sales.
- **Product Browsing**: Browse products in each category, filter by discount percentage, price range, and brands.
- **Product Details**: View detailed information about each product, select size and quantity.
- **Cart Management**: Add products to the cart, review details, and place orders.
- **Order Tracking**: View order details and status.

## Prerequisites

- Node.js (v12 or later)
- npm (v6 or later)
- MongoDB (MongoDB Atlas)

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/sree-shp/Fash.git
cd Fash
```

### Install Dependencies

Navigate to the "client" directory and install dependencies:

```sh
cd client
npm install
```

Navigate to the "server" directory and install dependencies:

```sh
cd ../server
npm install
```

### Setup Environment Variables

Create a .env file in the server directory and add the following variables:

```sh
PORT=4000
DATABASE_URL=mongodb://<username>:<password>@cluster0.mongodb.net/Fash?retryWrites=true&w=majority
```

Replace <username> and <password> with your actual MongoDB credentials. For local development, you can use:

Create a .env file in the client directory and add the following variables:

```sh
VITE_REACT_APP_API_BASEURL=http://localhost:4000
```

### Run the Application

**Client**
Start the client development server:

```sh
cd client
npm start
```

The frontend server should now be running on http://localhost:3000.

**Server**
Start the backend server

```sh
cd ../server
npm start
```

The backend server should now be running on http://localhost:4000.

## Usage

1. Open your browser and navigate to http://localhost:3000.
2. Browse products through search, categories, subcategories, and sales.
3. View detailed information about a product and choose size and quantity.
4. Add products to the cart and review details in the cart page.
5. Place an order and track order details through the navbar.

## API Endpoints

### User Authentication and Authorization

1. GET /api/v2/user/signup - Signup new user
2. POST /api/v2/user/login - Login a user
3. PUT /api/v2/user/logout - Logout a user

### Product Management

1. GET /api/v2/product - List all products
2. POST /api/v2/product - Add Products
3. GET /api/v2/product/:id - Get Product Details
4. GET /api/v2/product/EndOfSeasonSale/:categoryGroup - Get End of Season Sale products
5. GET /api/v2/product/:categoryGroup/:category - Get product based on category
6. GET /api/v2/product/:categoryGroup/:category/:subCategory - Get product based on sub-category
7. GET /api/v2/search - Search products based on query

### Cart Management

1. GET /api/v2/cart - Get cart details of a particular user
2. POST /api/v2/cart - Add products to cart
3. PATCH /api/v2/cart/:cartItemId - Update details of a particular cart item such as size and quantity
4. DELETE /api/v2/cart/:cartItemId - Delete a cart item

### Order Management

1. GET /api/v2/order - Get Order details of a particular user
2. POST /api/v2/order - Place order from cart
