import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import TermsCondition from "../Others/Term&Condition/TermsCondition";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
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
          // <PrivateRoutes>

          // </PrivateRoutes>
          <Home></Home>
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
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
