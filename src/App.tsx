// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./App.css";
import "./tailwind.css";

const App: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
