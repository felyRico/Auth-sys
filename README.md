# User Authentication System

A user authentication system built with React, Formik, Yup, JSON Server, and the Fetch API. This project allows users to register, log in, and access a personalized dashboard after authentication. It demonstrates form validation, API communication, and session management using localStorage.

## Features

- User Registration: New users can sign up with a username, email, and password.
- User Login: Registered users can log in using their credentials.
- Dashboard: After successful login, users are redirected to a dashboard displaying a personalized welcome message.
- Form Validation: Validation is implemented using Formik and Yup.
- API Communication: Uses the Fetch API with async/await to interact with a local JSON Server.
- Session Management: Authenticated sessions are managed using localStorage.
- Logout Functionality: Users can log out, which clears the session and redirects them to the login page.
- Bonus: Prevents registration with an already registered email.

## Technologies Used

- React (with Functional Components)
- Formik for form handling
- Yup for form validation
- JSON Server as a fake REST API
- Fetch API for async API requests
- React Router for client-side routing

## Instructions

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (includes npm)
- (Optional) [JSON Server](https://github.com/typicode/json-server) installed globally, run:
  npm install -g json-server
  - To clone the repository:
  git clone https://github.com/felyRico/Auth-Sys
  - To install dependencies:
  npm install [dependencies]

  ### Running the Application
  
  Start JSON server on port 5000:
  json-server --watch db.json --port 5000
  (optional) This is due to Windows PowerShell's execution policy. To temporarily bypass this restriction, run:
  powershell -ExecutionPolicy Bypass
  In a new terminal window, run:
  npm start (If using react-create-app)
  npm run dev (If using react vite)
  The app will start in development mode and should open automatically in your default browser at http://localhost:3000

  ### Using the Application

    Navigate to /register to create a new account.
    Navigate to /login to log in with your credentials.
    After a successful login, you will be redirected to the /dashboard.

## Acknowledgments

- [React](https://reactjs.org/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [JSON Server](https://github.com/typicode/json-server)#   A u t h - s y s  
 