# User Authentication System

A user authentication system built with React, Formik, Yup, JSON Server, and the Fetch API. This project allows users to register, log in, and access a personalized dashboard after authentication. It demonstrates form validation, API communication, and session management using localStorage.

## Features

- **User Registration:** New users can sign up with a username, email, and password.
- **User Login:** Registered users can log in using their credentials.
- **Dashboard:** After a successful login, users are redirected to a dashboard displaying a personalized welcome message.
- **Form Validation:** Implemented using Formik and Yup.
- **API Communication:** Uses the Fetch API with async/await to interact with a local JSON Server.
- **Session Management:** Authenticated sessions are managed using localStorage.
- **Logout Functionality:** Users can log out, which clears the session and redirects them to the login page.
- **Bonus:** Prevents registration with an already registered email.

## Technologies Used

- **React** (with Functional Components)
- **Formik** for form handling
- **Yup** for form validation
- **JSON Server** as a fake REST API
- **Fetch API** for async API requests
- **React Router** for client-side routing

## Instructions

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (includes npm)
- (Optional) JSON Server installed globally:  
  `npm install -g json-server`

### Installation

1. **Clone the Repository:**  
   `git clone https://github.com/felyRico/Auth-Sys.git`  
   `cd Auth-Sys`

2. **Install Dependencies:**  
   `npm install`

### Running the Application

Start JSON Server on port 5000:  
`json-server --watch db.json --port 5000`

**Note for Windows Users:**  
If you encounter an error related to PowerShell's execution policy (e.g., scripts being disabled), you can temporarily bypass the restriction by running:  
`powershell -ExecutionPolicy Bypass`

2. **Start the React Application:**  

Open a new terminal window and run one of the following commands:

- **For Create React App:**  
  `npm start`

- **For Vite:**  
  `npm run dev`

The application will start in development mode and should open automatically in your default browser at `http://localhost:3000`.

### Using the Application

- **Register:**  
Navigate to `/register` to create a new account.

- **Login:**  
Navigate to `/login` to log in with your credentials.

- **Dashboard:**  
After a successful login, you will be redirected to `/dashboard`.

## Acknowledgments

- [React](https://reactjs.org/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [JSON Server](https://github.com/typicode/json-server)



#   A u t h - s y s  
 #   A u t h - s y s t e m  
 #   A u t h - s y s t e m  
 #   A u t h - s y s  
 