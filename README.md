# E-Commerce Backend

## Overview
This is a backend application built using Node.js and Express.js to handle product and shopping cart functionalities. The application utilizes MongoDB as the database.

## Installation
1. Clone the repository: 
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration
1. Ensure you have MongoDB installed and running.
2. Create a `.env` file in the root directory of the project and specify the following environment variables:
   ```env
   PORT=3000
   MONGODB_URI=<your-mongodb-uri>
   ```
   Replace `<your-mongodb-uri>` with your actual MongoDB connection URI.

## Models
### Product Model (`models/Product.js`)
- **Fields:**
  - category: String (required)
  - title: String (required)
  - description: String (required)
  - price: Number (required)
  - oldPrice: Number
  - rating: Number (0 to 5)
  - inStock: Number (required)
  - image: String (required)

### Cart Model (`models/Cart.js`)
- **Fields:**
  - quantity: Number (default: 1)
  - product: ObjectId (refers to Product model, required)

## Routes
### Product Routes (`routes/product.routes.js`)
- `POST /products`: Create a new product.
- `GET /products`: Get all products or filter by category.
- `GET /products/:id`: Get a specific product by ID.
- `PUT /products/:id`: Update a product.
- `PATCH /products/:id`: Partially update a product.
- `DELETE /products/:id`: Delete a product.

### Cart Routes (`routes/cart.routes.js`)
- `POST /cart`: Add a product to the cart.
- `GET /cart`: Get all items in the cart.
- `GET /cart/:id`: Get a specific cart item by ID.
- `PUT /cart/:id`: Update a cart item.
- `PATCH /cart/:id`: Partially update a cart item.
- `DELETE /cart/:id`: Delete a cart item.

## Server
The server is initialized in `server.js`. It listens on the specified port and connects to the MongoDB database.

## Usage
1. Start the server:
   ```bash
   npm start
   ```
2. Once the server is running, you can access the API endpoints mentioned above.

## Dependencies
- Express.js
- Mongoose
- Cors


-----------------------------------------------------------------------------------------------------