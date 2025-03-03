import { createBrowserRouter } from "react-router-dom";
import SiteWrapper from "../layouts/SiteWrapper";
import Home from "../views/Home";
import TodoPage from "../views/TodoPage";
// import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteWrapper />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "todo_page",
        element: <TodoPage />,
      },
    ],
  },
]);

export default router;
