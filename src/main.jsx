import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Layout from "./Layout.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Home, About, Contact, User, Github } from "./components/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route
        loader={async () => {
          return (
            await fetch("https://api.github.com/users/kamlesh-chowdary")
          ).json();
        }}
        path="github"
        element={<Github />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
