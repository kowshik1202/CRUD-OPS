# Express CRUD API

A simple RESTful CRUD API built using **Node.js** and **Express.js**. This project demonstrates basic API operations like **Create, Read, Update, Patch, and Delete** using in-memory data.

---

## 🚀 Features

* GET all products
* POST a new product
* PUT to update a product completely
* PATCH to update a product partially
* DELETE a product
* Uses Express JSON middleware

---

## 📁 Project Structure

```
expressjs/
│── server.js
│── package.json
│── package-lock.json
│── .gitignore
```

---

## 🛠️ Installation & Run

```bash
npm install
npm start
```

Server will start at:

```
http://localhost:3000
```

---

## 📌 API Endpoints

### 1️⃣ Get all products

```
GET /products
```

### 2️⃣ Add a product

```
POST /addproducts
```

Body:

```json
{
  "id": 1,
  "name": "Laptop",
  "number": 12345
}
```

### 3️⃣ Update product (Full update)

```
PUT /products/:id
```

### 4️⃣ Update product (Partial update)

```
PATCH /products/:id
```

### 5️⃣ Delete product

```
DELETE /products/:id
```

---

## 🧠 Concepts Covered

* REST API
* Express Routing
* Middleware
* Git & GitHub
* CRUD operations

---

## 📌 Notes

* `node_modules` is ignored using `.gitignore`
* Data is stored temporarily (in-memory)

---

## 👤 Author

**Nichanametla Venkat Sai Kowshik**

---

⭐ If you like this project, give it a star on GitHub!
