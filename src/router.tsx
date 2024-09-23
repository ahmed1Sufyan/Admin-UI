import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import Categories from "./Pages/Categories";

export const router = createBrowserRouter([
    { path: "/", element: <HomePage/> },
    { path: "/categories", element: <Categories/> },
])