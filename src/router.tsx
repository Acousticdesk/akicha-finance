import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { CreateExpense } from "./expenses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-expense",
    element: <CreateExpense />,
  },
]);
