import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { CreateExpense, CategoryDetails } from "./screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/category/:categoryLabel",
    element: <CategoryDetails />,
  },
  {
    path: "/create-expense",
    element: <CreateExpense />,
  },
]);
