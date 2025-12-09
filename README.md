# Chat Application – Project Overview and Functionality

This project is a fullstack chat application built with a Node.js/Express backend and a simple HTML/CSS/JavaScript frontend.  
The goal of the application is to allow users to register, log in, and exchange messages through a clean and responsive interface.

---

## 1. General Concept

The application works as a classic messaging platform.  
A user must first create an account, then log in. Once authenticated, the user gains access to the chat interface, where all messages from all users are displayed. A user can send new messages, which are immediately added to the global chat.

The system uses authentication tokens to secure access to the messaging features.

---

## 2. Backend Functionality

The backend is responsible for:
- Managing user accounts
- Authenticating users
- Protecting private routes
- Communicating with the database
- Storing and retrieving chat messages

### Authentication Process
1. A user creates an account by choosing a username and password.  
2. When logging in, the backend verifies the credentials.  
3. If valid, the backend returns a unique authentication token (JWT).  
4. This token must be included in all future requests that require user identification.

### Protected Routes
The messaging system is accessible only to authenticated users.  
The backend checks the provided token before allowing:
- Retrieving messages
- Sending new messages

### Database Role
The backend stores:
- User accounts  
- Chat messages  
- Timestamps and sender information  

This ensures messages persist even after closing the application.

---

## 3. Frontend Functionality

The frontend is a simple web interface that interacts with the backend through HTTP requests.  
It includes several pages and UI components:

### Registration Interface
Allows new users to create an account.  
After registration, a confirmation message is displayed.

### Login Interface
Allows existing users to authenticate.  
On success, the authentication token is stored temporarily in the browser.

### Chat Interface
Once authenticated, the user gains access to:
- A message display area that lists all messages
- An input field to send new messages
- Automatic refresh of the conversation after each message
- Message metadata (author name and date)

### Header and Footer
The interface includes:
- A header with the application title
- A footer displaying the creator’s name and picture

These elements give the application a more polished and complete presentation.

---

## 4. How the Application Works Internally

1. The user opens the frontend in a browser.  
2. They register or log in.  
3. After logging in, the browser saves the authentication token.  
4. Each action related to messages sends a request to the backend including the token.  
5. The backend verifies the token, then processes the request.  
6. Messages are stored in the database and returned to the frontend.  
7. The frontend updates the chat window to display the latest messages.  

The system follows a client-server architecture where the browser (client) communicates with the Node.js backend (server), which in turn communicates with the MySQL database.

---

## 5. Project Purpose

This project demonstrates:
- How to build a login system  
- How to protect private routes  
- How to store and display messages  
- How to interact with a database from a backend  
- How a basic fullstack application works end-to-end  

It serves as an introductory fullstack project combining backend logic, database management, and a functional, responsive frontend interface.

---

## 6. Author

Clément Silva Le Barz  
Computer Engineering Student, EFREI Paris

---

## 7. Project Status

Fully functional and ready for demonstration or further development.


