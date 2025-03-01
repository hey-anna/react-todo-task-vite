import { createBrowserRouter } from "react-router-dom";
import SiteWrapper from "../layouts/SiteWrapper";
import Home from "../views/Home";
import TodoList from "../views/TodoList";
// import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteWrapper />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "TodoList",
        element: <TodoList />,
      },
    ],
  },
]);

export default router;
