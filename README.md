# AuthApp Backend

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![License](https://img.shields.io/github/license/loganathanramsaran/authApp_backend)

## ✨ Features
- **User Registration**: Securely register new users (bcrypt hashed passwords)
- **User Login**: Authenticate and receive JWTs
- **Bearer Token Authorization**: Protect API routes (JWT)
- **MVC Pattern**: Clean code and maintainability
- **MongoDB**: Persistent data with Mongoose

## 🚀 Technologies Used
- Node.js
- Express.js
- Mongoose (MongoDB)
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

## 📊 Data
View data in [Google Sheet](https://docs.google.com/spreadsheets/d/1gFLlGjWgVg1BXB_u7QHCgxLyUFswxUHxHwSIyhzM2YE/edit?usp=sharing)

## Configuration Settings

| Setting       | Description                                  | Default Value |
| :------------ | :------------------------------------------- | :------------ |
| `PORT`        | Port number for the server to listen on.     | `4000`        |
| `MONGO_URI`   | Connection string for the MongoDB database.  | `(required)`  |
| `JWT_SECRET`  | Secret key used for signing JWTs.            | `(required)`  |

## API Response Codes

| Status Code | Description           |
| :---------- | :-------------------- |
| `200 OK`    | Request successful.   |
| `201 Created` | Resource created.     |
| `400 Bad Request` | Invalid input.        |
| `401 Unauthorized` | Authentication failed. |
| `500 Internal Server Error` | Server encountered an error. |

## 🛠️ Setup

```bash
git clone https://github.com/loganathanramsaran/authApp_backend.git
cd authApp_backend
npm install
npm start
