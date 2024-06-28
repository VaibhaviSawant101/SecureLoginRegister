# SecureLoginRegister

SecureLoginRegister is a robust and secure authentication and authorization system designed to handle user login and registration functionalities. This project is built with a modern tech stack featuring Express.js and Node.js for the backend, and React.js for the frontend.

## Features

- **User Registration:** Allows users to create new accounts with secure password hashing.
- **User Login:** Enables users to log in with their registered credentials.
- **JWT Authentication:** Utilizes JSON Web Tokens (JWT) for secure and stateless user authentication.
- **Protected Routes:** Ensures that certain routes are accessible only to authenticated users.
- **User Sessions:** Manages user sessions effectively with JWT, allowing users to stay logged in.

## Technologies Used

### Backend

- **Node.js:** JavaScript runtime for server-side development.
- **Express.js:** Web framework for building the backend API.
- **JWT (JSON Web Tokens):** Token-based authentication for securing user sessions.
- **MongoDB (or any other database):** To store user data securely.

### Frontend

- **React.js:** JavaScript library for building interactive and dynamic user interfaces.
- **Axios:** Promise-based HTTP client for making API requests.
- **React Router:** For managing navigation and protected routes in the application.

## How It Works

### Registration

- Users can register by providing a username, and password.
- Passwords are hashed and stored securely in the database.
- Upon successful registration, a JWT is generated and sent to the user.

### Login

- Users can log in using their username and password.
- The server verifies the credentials and, if valid, generates a JWT.
- The JWT is sent to the client and stored locally (e.g., in localStorage).

### Protected Routes

- Certain routes in the application are protected and require a valid JWT for access.
- The JWT is included in the headers of API requests to access protected resources.

### Session Management

- Users stay logged in by maintaining the JWT in their local storage.
- JWTs are verified on the server for each protected route request to ensure the user is authenticated.

## Getting Started

### Prerequisites

- **Node.js**: Install from [Node.js official website](https://nodejs.org/)
- **MongoDB**: Install from [MongoDB official website](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/VaibhaviSawant101/SecureLoginRegister.git
   cd AuthSignInRegister

2. **Install Dependencies:**
    1. **Backend:**
        ```bash
        cd backend
        npm install

    2. **Frontend:**
        ```bash
        cd frontend
        npm install

3. **Set Up Environment Variables:**
   - Create a .env file in the backend directory and configure the necessary environment variables (e.g., database URL, JWT secret)

### Running the Application

1. **Run the Backend:**
     ```bash
    cd backend
    npm run dev

2. **Run the Frontend:**
     ```bash
    cd frontend
    npm start

## Project Structure

SecureLoginRegister/  
├── backend/  
│   ├── controllers/  
│   │   └── userLoginController.js  
│   │   └── userProfileController.js    
│   │   └── userRegisterController.js   
│   ├── middleware/   
│   │   └── verifyJWT.js  
│   ├── model/   
│   │   └── userModel.js  
│   ├── routes/  
│   │   └── loginRoute.js  
│   │   └── registerRoute.js  
│   │   └── userProfileRoute.js  
│   ├── .env  
│   ├── config.js   
│   ├── server.js   
│   └── package.json  
├── frontend/  
│   ├── src/   
│   │   ├── components/  
│   │   ├── App.js  
│   │   ├── index.js  
│   ├── public/  
│   ├── package.json  
├── README.md   
└── .gitignore  


## Conclusion   
SecureLoginRegister provides a comprehensive solution for user authentication and authorization, combining the power of Node.js, Express.js, JWT, and React.js. This project ensures a secure and seamless user experience for logging in and registering on your web application.
