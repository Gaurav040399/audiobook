# Audiobook App 

This repository contains the backend and frontend code for a Audiobook application. 
The backend provides functionalities for user authentication, Adding, Updating, Deleting, retrieving, and redirection for All courses and audiobook.

## Backend Functionality

### Initialization
To get started, run the following command to install dependencies:
 - `npm install`
 
### Routes

#### User Routes
- `POST /user/register`: Register a new user
- `POST /user/login`: Login for existing users (Generates authentication token using bcrypt for password hashing)

#### Course Routes
- `GET /course/data`: All Courses present in Database.
- `POST /course/new-course`: Add a new course in the database.
- `PATCH /course/update/:courseId`: Update existing document present in the Course collection.
- `DELETE /course/delete/:courseId`: Delete existing document present in the Course collection.

#### Audiobook Routes
- `GET /audiobook/data`: All Audiobok present in Database.
- `POST /audiobook/new-course`: Add a new audiobook in the database.
- `PATCH /audiobook/update/:bookId`: Update existing document present in the Audiobook collection.
- `DELETE /audiobook/delete/:bookId`: Delete existing document present in the Audiobook collection.


### Tech Stack

## Backend
- Node.js
- MongoDB
- Express.js

## Frontend Functionality

### Functionality
The frontend provides the following functionalities:
- User login
- User signup
- Homepage for Showing Courses and audiobook

### Tech Stack
- HTML
- CSS
- JavaScript

## Usage
1. Start the backend server using `node index.js`.
2. Implement the frontend to interact with the backend API endpoints.

Feel free to customize and build upon this project to suit your requirements.
