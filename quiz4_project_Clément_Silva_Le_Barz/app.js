require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createPool({
    host: "localhost",
    user: "chatapp",
    password: "password123",
    database: "projetchat"
});


db.getConnection((err) => {
    if (err) {
        console.log("Connection error MySQL :", err);
    } else {
        console.log("Connected to MySQL ✔");
    }
});


function auth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Missing token" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid Token" });
        req.user = user;
        next();
    });
}

app.post("/auth/register", (req, res) => {
    const { username, password } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ message: "Server error" });

        db.query(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [username, hash],
            (err) => {
                if (err) return res.status(400).json({ message: "This user already exists" });
                return res.status(201).json({ message: "User created" });
            }
        );
    });
});


app.post("/auth/login", (req, res) => {
    const { username, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE username = ?",
        [username],
        (err, rows) => {
            if (err || rows.length === 0)
                return res.status(400).json({ message: "User not found" });

            const user = rows[0];

            bcrypt.compare(password, user.password, (err, match) => {
                if (!match)
                    return res.status(401).json({ message: "Incorrect Password" });

                const token = jwt.sign(
                    { id: user.id, username: user.username },
                    process.env.JWT_SECRET,
                    { expiresIn: "24h" }
                );

                res.json({ message: "Connexion OK", token });
            });
        }
    );
});

app.post("/messages", auth, (req, res) => {
    const { content } = req.body;
    const user_id = req.user.id;

    db.query(
        "INSERT INTO messages (user_id, content) VALUES (?, ?)",
        [user_id, content],
        (err) => {
            if (err) return res.status(500).json({ message: "Error sending message" });
            res.status(201).json({ message: "Message sent" });
        }
    );
});

app.get("/messages", auth, (req, res) => {
    db.query(
        `SELECT messages.*, users.username 
         FROM messages 
         JOIN users ON users.id = messages.user_id 
         ORDER BY created_at DESC`,
        (err, rows) => {
            if (err) return res.status(500).json({ message: "recuperation error" });
            res.json(rows);
        }
    );
});

app.listen(3002, () => {
    console.log("Serveur lancé sur http://localhost:3002");
});

