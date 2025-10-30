// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Contact from "./Contact";

// define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,          // top-level layout or wrapper
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
