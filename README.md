# Chat Application – Project Documentation

This project is a fullstack chat application that allows users to create an account, log in, and exchange messages through a simple and modern interface.  
The system includes a backend server, a database, and a browser-based frontend.

---

## 1. Purpose of the Application

The application enables users to:
- Register with a unique account
- Log into the platform securely
- Access a private chat area
- Send and view messages from all users
- See each message associated with its author and date
- Use a clean interface that includes a header and footer with creator information

It is designed to demonstrate how a complete fullstack system works from end to end.

---

## 2. How the Application Works

### a) User Accounts
A user must first register. Once the account is created, they can log in.  
After logging in, they receive an authentication token that grants access to the chat.

### b) Protected Chat Area
Only authenticated users can:
- Read existing messages
- Send new messages

The system ensures messages are tied to real user accounts and stored permanently.

### c) Backend Role
The backend handles:
- Account creation
- Login verification
- Security
- Communication with the database
- Storage and retrieval of messages

It ensures the data is stored safely and that only authorized users can access the chat.

### d) Frontend Role
The frontend is an HTML page that:
- Shows the registration and login forms
- Displays the chat area once logged in
- Communicates with the backend to retrieve and send messages
- Shows the creator’s information in the footer

---

## 3. How to Use the Application

### Step 1 — Open the Frontend
Open the file:

You can simply double-click it.  
The application will open directly in your web browser.

No installation is required for the frontend.

### Step 2 — Register
Enter a username and password to create your account.  
A confirmation message will appear.

### Step 3 — Log In
Enter the same username and password.  
If valid, you will be granted access to the chat area.

### Step 4 — Use the Chat
Once logged in:
- You can type a message in the text field
- The message appears instantly in the chat
- All messages display the author and date
- You remain logged in until you click the logout button

---

## 4. How to Launch the Backend

To make the chat functional, the backend must be running.

### Step 1 — Ensure the Database Is Created
The database must be created once in MySQL.  
After that, no further setup is needed.

### Step 2 — Launch the Backend Server
Start the server by running the application with Node.js:



This starts the backend API and connects it to the database.  
Once it is running, the frontend will be able to communicate with it automatically.

No need to install node_modules yourself, as they are already included or will be handled in the setup environment.

---

## 5. What Happens When You Use the App

1. You open the frontend in your browser.  
2. You create an account or log in.  
3. The backend verifies your identity.  
4. If valid, you access the chat.  
5. Each action (sending or reading messages) is handled by the backend.  
6. Messages are stored in the database and retrieved instantly.  
7. You can log out at any time to secure your session.

---

## 6. Additional Features

- Display of the username and date next to every message  
- Rounded UI elements and improved styling  
- Header and footer for a more complete design  
- Creator section with a personal image  
- Animations on interactive elements (buttons, transitions, etc.)

---

## 7. Project Status

The project is fully functional.  
The backend, database, and frontend are correctly connected.  
Users can register, log in, send messages, and view all communication in real time.

---

## 8. Author

Clément Silva Le Barz  
Computer Engineering Student – EFREI Paris



