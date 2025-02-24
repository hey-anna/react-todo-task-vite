import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
// import About from "./components/About";
import TodoList from "../views/TodoList";
// import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "TodoList",
        element: <TodoList />,
      },
    ],
  },
]);

export default router;
