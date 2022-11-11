import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
