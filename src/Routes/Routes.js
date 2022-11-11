import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import TermsCondition from "../Others/Term&Condition/TermsCondition";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Home></Home>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "terms",
        element: <TermsCondition></TermsCondition>,
      },
    ],
  },
]);

export default router;
