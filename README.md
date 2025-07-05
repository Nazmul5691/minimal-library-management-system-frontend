
# 📚 Minimal Library Management System

A full-stack Library Management System built with **React, Redux Toolkit Query, Tailwind CSS** on the frontend and **Express, TypeScript, MongoDB (Mongoose)** on the backend.

---

## 🚀 Live Demo

- 🔗 **Frontend:** [https://minimal-library-management-system-f.vercel.app](https://minimal-library-management-system-f.vercel.app)  

- 🔗 **Backend API:** [https://minimal-library-management-system-b.vercel.app](https://minimal-library-management-system-b.vercel.app)

---

## 🧩 Tech Stack

### 🔷 Frontend
- React + TypeScript
- Redux Toolkit + RTK Query
- Tailwind CSS
- React Router
- Dark/Light Mode Toggle
- Vercel Deployment

### 🔶 Backend
- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- RESTful API

---

## 📁 Frontend Structure

```
├── src
│   ├── assets
│   ├── components
│   │   ├── module
│   │   │   ├── From.tsx
│   │   │   ├── borrowBooks
│   │   │   │   └── BorrowBookCard.tsx
│   │   │   └── books
│   │   │       └── BooksCard.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── mood-toggler.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── popover.tsx
│   │       └── textarea.tsx
│   ├── layout
│   │   └── Navbar.tsx
│   ├── lib
│   │   └── utils.ts
│   ├── pages
│   │   ├── AboutUs.tsx
│   │   ├── AddBook.tsx
│   │   ├── Authors.tsx
│   │   ├── Books.tsx
│   │   ├── BorrowBook.tsx
│   │   ├── BorrowSummary.tsx
│   │   ├── ContactUs.tsx
│   │   └── Home.tsx
│   ├── providers
│   │   └── theme-provider.tsx
│   └── redux
│       ├── api
│       │   └── baseApi.ts
│       ├── hook.ts
│       └── store.ts
│   ├── routes
│   │   └── router.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── types.ts
```

---

## 📁 Backend Structure

```
src
├── app
│   ├── controllers
│   │   ├── book.controller.ts
│   │   └── borrow.controller.ts
│   ├── models
│   │   ├── book.model.ts
│   │   └── borrow.model.ts
│   ├── interfaces
│   │   ├── book.interface.ts
│   │   └── borrow.interface.ts
│   ├── routes
│   │   ├── book.route.ts
│   │   └── borrow.route.ts
│   ├── middlewares
│   │   └── errorHandler.ts
├── app.ts
└── server.ts
```

---

## ⚙️ Features

### ✅ Frontend
- Public book listings
- Add, edit, and delete books
- Borrow book functionality
- Quantity & due date validation
- Borrow summary
- Mobile-friendly responsive UI
- Dark/Light Mode
- Clean design with Tailwind

### ✅ Backend
- RESTful API
- Book management (CRUD)
- Mongoose schema validation
- Business logic for borrowing and availability
- Aggregation pipeline for summary
- Static & middleware methods in Mongoose
- Error handling middleware

---

## 🌐 Environment Variables

### ✅ Backend
Create `.env` in root:
```
DATABASE_URL=mongodb+srv://<your-db-url>
PORT=5000
```

### ✅ Frontend
Create `.env`:
```
VITE_API_BASE_URL=https://library-management-backend-theta.vercel.app
```

---

## 📦 Installation & Setup

### 🔹 Backend

```bash
git clone https://github.com/Nazmul5691/minimal_library_management_system-backend
cd minimal_library_management_system-backend
npm install
npm run dev
```

### 🔹 Frontend

```bash
git clone https://github.com/Nazmul5691/minimal-library-management-system-frontend.git
cd minimal-library-management-system-frontend
npm install
npm run dev
```

---

## 📌 API Endpoints (Backend)

### 📚 Book Management

- `POST /books` → Create a book  
- `GET /books` → Get all books (filter, sort, limit supported)  
- `GET /books/:bookId` → Get book by ID  
- `PUT /books/:bookId` → Update book  
- `DELETE /books/:bookId` → Delete book  

### 🔁 Borrow Management

- `POST /borrow` → Borrow a book  
- `GET /borrow` → Get borrow summary  

#### Sample Borrow Body:
```json
{
  "book": "<book-id>",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```

---

## 🧪 Example Test Data

```json
{
  "title": "1984",
  "author": "George Orwell",
  "genre": "FICTION",
  "isbn": "9780451524935",
  "description": "A dystopian social science fiction novel.",
  "copies": 3,
  "available": true
}
```

---

## ⚒️ Deployment (Vercel)

### ✅ Backend
- Deployed as serverless functions
- `.vercel.json` configured if needed
- Environment variables added via Vercel dashboard

### ✅ Frontend
- Automatically deployed via Git integration
- Uses Vite + React + Tailwind

---

## ✨ Author

- **Nazmul Islam**

