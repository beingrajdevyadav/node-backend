import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
// Importing data from local files
import posts from './data/posts.js';
import users from './data/users.js';
import products from './data/products.js';
import quotes from './data/quotes.js';
import recipes from './data/recipes.js';

configDotenv();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from the public directory

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html'); // Serve the index.html file
});

// Endpoint to get all posts
app.get('/api/v1/posts', (req, res) => {
    res.status(200).json({
        success: true,
        posts
    });
});

// Endpoint to get all users
app.get('/api/v1/users', (req, res) => {
    res.status(200).json({
        success: true,
        users
    });
});


// Endpoint to get all products
app.get('/api/v1/products', (req,res)=>{
    res.status(200).json({
        success: true,
        products
    });
});

// Endpoint to get all quotes
app.get('/api/v1/quotes', (req,res)=>{
    res.status(200).json({
        success: true,
        quotes
    });
});

// Endpoint to get all recipes
app.get('/api/v1/recipes', (req,res)=>{
    res.status(200).json({
        success: true,
        recipes
    });
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})