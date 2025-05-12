import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";

// Define routes
//Layout Routes help us to use shared elements
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //Acts as a base/layout element, a shared navbar across all pages
    children: [
      { path: "/", element: <PostList /> },
      { path: "/createpost", element: <CreatePost /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
