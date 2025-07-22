import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
// Importing data from local files
import posts from './data/posts.js';
import users from './data/users.js';
import products from './data/products.js';
import top10Richest from "./data/richest10.js";
import top10BanksIndia from "./data/banks10.js";
import top10IndianCompanies from "./data/companies10.js";
import top10StartupsIndia from "./data/startups10.js";
import top10Cricketers from "./data/cricketers10.js";
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


// Endpoint to get top 10 richest people
app.get('/api/v1/richest', (req, res) => {
    res.status(200).json({
        success: true,
        top10Richest
    });
});

// Endpoint to get top 10 banks in India
app.get('/api/v1/banks', (req, res) => {
    res.status(200).json({
        success: true,
        top10BanksIndia
    });
}   );

// Endpoint to get top 10 Indian companies
app.get('/api/v1/companies', (req, res) => {
    res.status(200).json({
        success: true,
        top10IndianCompanies
    });
});
// Endpoint to get top 10 startups in India
app.get('/api/v1/startups', (req, res) => {
    res.status(200).json({
        success: true,
        top10StartupsIndia
    });
});
// Endpoint to get top 10 cricketers
app.get('/api/v1/cricketers', (req, res) => {
    res.status(200).json({
        success: true,
        top10Cricketers
    });
});


// Endpoint to get all recipes
app.get('/api/v1/recipes', (req,res)=>{
    res.status(200).json({
        success: true,
        recipes
    });
})

app.listen(port,'0.0.0.0', () => {
    console.log(`http://localhost:${port}`);
})