import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
