# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🧠 Social Media React App

A simple, responsive social media-style app built with React. Users can create, view, and delete posts. It demonstrates modern React features including `useReducer`, `Context API`, dynamic routing with React Router, loading state management, and proper `useEffect` cleanup.

---

## 🚀 Features

- 🔄 Global state management using `useReducer` and `Context API`
- 📤 Create new posts and send them to an external API
- 🗑️ Delete posts from the feed
- 🔃 Fetch post list from [dummyjson.com](https://dummyjson.com/)
- 🧭 Routing with `react-router-dom`
- 🧹 Clean up API calls using `AbortController` in `useEffect`
- ⏳ Loading spinner during API fetches
- 🛠️ Bootstrap UI for clean layout and form styling

---

## 📂 Project Structure

/src
│
├── /components
│ ├── CreatePost.jsx # Post creation form
│ ├── PostList.jsx # Displays list of posts
│ └── Post.jsx # Individual post (assumed)
│
├── /store
│ └── postList-store.js # Context & reducer logic
│
├── App.jsx # Main app layout (shared routes)
├── main.jsx # Entry point with router setup
└── index.html # HTML template