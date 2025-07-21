import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send("Jai Shree Shyam!");
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})