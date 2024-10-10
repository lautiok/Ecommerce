
# Ecommerce Simplified Purchasing and Management Experience💻🛒

The online store was built using ReactJS for the frontend and Node.js with Express for the backend. We employ JWT for authentication security and BcryptJS for password protection. We use MongoDB with Mongoose to manage the database and Nodemailer for communication with users. This approach allowed us to create an efficient and secure e-commerce platform.



## 🛠 dependencies

Backend:

- Express: A minimalist Node.js framework that makes it easy to create RESTful APIs and handle routes.
- Mongoose: For modeling our application's data and managing interaction with the MongoDB database.
- JWT (JSON Web Tokens): Used for user authentication, allowing secure generation and verification of access tokens.
- BcryptJS: For password encryption and ensuring the security of user credentials.
- Nodemailer: For sending emails from the backend, in this case, used to send purchase confirmations to users.
- Twilio: For sending SMS notifications, such as purchase notification to our team.
## Installation Backend ⚙🛠

Install Ecommerce with Github

```bash
  gh repo clone lautiok/Ecommerce
  cd Ecommerce
  cd backend 
  npm Install
  npm run dev
```

## API Reference

#### Register

```http
    POST /api/register

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. User  |
| `email` | `string` | **Required**. Email User  |
| `Password` | `string` | **Required**. password User  |




#### Login

```http
  POST /api/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email User |
| `password` | `string` | **Required**. Password User  |


#### Orders

```http
    GET /api/orders
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
No Required 

#### Order

```http
    GET /api/orders/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Order Id |


#### Products

```http
  POST /api/products
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
No Required

#### Product

```http
    GET /api/products/${id}

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Product Id |

## Authors

- [@Nahuel Guerra](https://www.nahuelguerra.com.ar)

