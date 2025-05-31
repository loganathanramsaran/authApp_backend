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
---

## API Endpoints 📮

| Method | Endpoint            | Description                  | Access       | Response                       |
|--------|----------------------|------------------------------|--------------|--------------------------------|
| GET    | `/api/users/profiles`| Get All Users for test       | 🌐 Public    | ✅ All Users    / ❌ Error    |
| GET    | `/api/users/profile` | Get User Profile using token | 🔐 Private   | 🔐 User Details / ❌ Error    |
| POST   | `/api/auth/register` | Register New User            | 🌐 Public    | ✅ JWT token / ❌ Error       |
| POST   | `/api/auth/login`    | Login Existing User          | 🌐 Public    | ✅ Success / ❌ Error         |

---
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

--

## Deployed App 🚀

#### For Live Demo Click the Below Link ⬇️ <br/>

🌐 Live URL : [https://authApp.onrender.com/](https://authapp-backend-jglx.onrender.com)

---

#### Explore the authApp endpoints using Postman ⬇️ <br/>

## 📬 Postman Collection

You can test all API endpoints using the Postman collection below:

🔗 [View in Postman](https://loganathanc-7436853.postman.co/workspace/Loganathan-C's-Workspace~3f55cebb-894f-406b-8650-cd297ae5e97d/collection/44466576-72ee2946-d0f6-4c7a-9cfd-3082ca27ae84?action=share&creator=44466576)



---

## Project Structure 🗂️

```bash
AuthFlow/
├── 📂 config/           # ⚙️ Configuration files (e.g.,config,db)
├── 📂 controllers/      # 🧠 Business logic
├── 📂 middlewares/      # 🛡️ Middleware
├── 📂 models/           # 🛢️ Mongoose Schemas and Data Models
├── 📂 routes/           # 🛣️ Express route Definitions
├── 📂 utils/            # 🔧 Helper functions
├── 📂 views/            # 🎨 EJS templates for Rendering Views
├── 📄 app.js            # 🚀 App Setup
├── 📄 package.json      # 📦 Project Dependencies
├── 📄 package-lock.json # 🔒 Exact versions of Installed Dependencies
├── 📄 README.md         # 📝 Project Overview and Setup Instructions
├── 📄 .gitignore        # 🚫 Specifies Files and Directories to Ignore in Git
└── 📄 .env              # 🌱 Environment Variables (e.g., DB URL, PORT, Secrets)

```

## 🛠️ Setup

```bash
git clone https://github.com/loganathanramsaran/authApp_backend.git
cd authApp_backend
npm install
npm start
