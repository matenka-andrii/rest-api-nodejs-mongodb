# REST API with Node.js, Express.js, Redis and MongoDB

## To start, follow the instructions:

1. Clone the repository:
+ `git clone git@github.com:matenka-andrii/rest-api-nodejs-mongodb.git`

2. Change into the project directory:
+ `cd rest-api-nodejs-mongodb`

3. Install dependencies:
+ `npm install`

4. Create a `.env` file in the root directory of the project with the following contents:
+ `MONGODB_URL=mongodb://mongouser:mongopass@localhost:27017`
+ `JWT_SECRET=jwt_secret`
+ `PORT=3000`
+ `REDIS_URI=redis://:your_password@localhost:6379`
+ `REDIS_PASS=your_password`

5. Start the Docker containers (Note: You must have the Docker Desktop application installed on your system):
+ `docker compose up -d`

6. Start the server:
+ `npm run start:dev`

After completing the above steps, the server should be running and accessible at http://localhost:3000.

## Using Postman to Fetch Endpoints
This section provides detailed information about the available endpoints that can be accessed using Postman.

### Available Endpoints

#### Create User
+ **Method**: POST
+ **Endpoint**: /users
+ **Body**: JSON object containing the user's details. Fields required are as follows:

```
{
  "firstName": "YourFirstName",
  "lastName": "YourLastName",
  "email": "your.email@example.com",
  "password": "YourSecurePassword"
}
```

#### Login Endpoint
Authenticate User
+ **Method**: POST
+ **Endpoint**: /login
+ **Body**: JSON object containing the user's credentials. Required fields are as follows:

```
{
  "email": "your.email@example.com",
  "password": "YourSecurePassword"
}
```
+ **Description:** This endpoint authenticates a user by their email and password. Upon successful authentication, it returns a token which should be used for subsequent requests requiring authentication.

#### Important:
+ After receiving the token, it must be included in the header of all authenticated requests as a Bearer token. This is critical for accessing any endpoints that require authorization.
+ To do this, set the `Authorization` header of your request in Postman as follows: `Bearer <your_token_here>`.
+ Replace `<your_token_here>` with the actual token received from the /login endpoint.

#### Create Category

+ **Method**: POST
+ **Endpoint**: /categories
+ **Body**: JSON object containing the category's details. Fields required are as follows:

```
{
  "name": "YourCategoryName",
}
```

#### Get Categories

+ **Method**: GET
+ **Endpoint**: /categories
+ **Authorization**: `Bearer <your_token_here>`
+ **Returns**: This endpoint returns a JSON array of categories. Each category object contains an ID and a name attribute.

```
[
  {
    "id": "65ca211f2591239c220243d1",
    "name": "Technology"
  },
  {
    "id": "65ca211f2591239c220243d2",
    "name": "Science"
  }
]
```
+ **Description**: Use this endpoint to fetch a list of all categories available in the system. 

#### Get Category By Id

+ **Method**: GET
+ **Endpoint**: /categories/:id
+ **Authorization**: `Bearer <your_token_here>`
+ **Params**: 
```
{
    params: {
        id: "created_category_id",
    }
}
```

### Other endpoints: 
+ Update category: `PUT /categories/:id`
+ Delete category: `DELETE /categories/:id`


+ Create product: `POST /products`
+ Get products: `GET /products`
+ Get product by id: `GET /products/:id`
+ Get products by category: `GET /products/category/:categoryId`
+ Update product: `PUT /products/:id`
+ Delete product: `DELETE /products/:id`