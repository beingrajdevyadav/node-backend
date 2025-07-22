# 🧠 [AnB](https://anb-lpmc.onrender.com) - Public JSON API

AnB is a lightweight public API built with **Node.js** and **Express** that serves various curated datasets via RESTful endpoints. It can be used for educational, testing, or demo purposes.

## 🌟 Features

- Public REST API with multiple JSON datasets
- No authentication required
- Serve static HTML page (`index.html`)
- Easy to deploy on platforms like Render or Vercel (for frontend)

---

## 🚀 API Endpoints

Base URL: `https://anb-lpmc.onrender.com` or your hosted domain

| Endpoint                  | Description                              |
|---------------------------|------------------------------------------|
| `/`                       | Serves the static homepage (`index.html`)|
| `/api/v1/posts`           | Get all posts                            |
| `/api/v1/users`           | Get all users                            |
| `/api/v1/products`        | Get all products                         |
| `/api/v1/richest`         | Top 10 richest people in India           |
| `/api/v1/banks`           | Top 10 banks in India                    |
| `/api/v1/companies`       | Top 10 successful Indian companies       |
| `/api/v1/startups`        | Top 10 new successful startups in India  |
| `/api/v1/cricketers`      | Top 10 successful cricketers of India    |
| `/api/v1/recipes`         | Get all recipes                          |

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- dotenv
- CORS

---

## 📁 Project Structure

- AnB/
- ├── data/
- │ ├── banks10.js
- │ ├── companies10.js
- │ ├── cricketers10.js
- │ ├── posts.js
- │ ├── products.js
- │ ├── recipes.js
- │ ├── richest10.js
- │ └── startups10.js
- ├── public/
- │ └── index.html
- ├── .env
- ├── index.js
- └── package.json


---


## Author
- **Rajdev Yadav**  
- [LinkedIn](https://www.linkedin.com/in/rjd06)

