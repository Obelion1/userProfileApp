import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";
import fs from "fs";
 import cors from 'cors';
 
// CORS konfigurieren
app.use(cors({
    origin: process.env.HOST, // React-URL
    // origin: '*', // Everything-URL
    credentials: true         // Erlaubt das Senden von Cookies, falls benötigt
}));
 
 

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// create a db connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// connect and log status
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to database.");
});

// simple test route
app.get("/api/todos", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error("Query error:", err);
      res.status(500).json({ error: "Database query failed" });
    } else {
      res.json(results);
    }
  });
});
// fetch and write the products table
function exportProducts() {
    const sql = "SELECT * FROM products";
    db.query(sql, (err, results) => {
      if (err) {
        console.error("Query error:", err);
        return;
      }

      const jsonData = JSON.stringify(results, null, 2);
    console.log("importing data");
      fs.writeFileSync("products.json", jsonData);
      console.log("Exported products to products.json");
    });
  }

  app.get("/api/exportProducts", (req, res) => {
    exportProducts();
    res.json({ success: true, message: "Export started" });
  });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
