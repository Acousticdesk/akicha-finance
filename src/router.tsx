import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { CreateExpense, CategoryDetails, ManageCategory } from "./screens";

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
    path: "/category/manage",
    element: <ManageCategory />,
  },
  {
    path: "/expense/create",
    element: <CreateExpense />,
  },
]);
