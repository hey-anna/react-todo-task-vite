import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./App.css";
import "./tailwind.css";

const App: React.FC = () => {
  return <RouterProvider router={router} future={{ v7_startTransition: true }}></RouterProvider>;
};

export default App;
