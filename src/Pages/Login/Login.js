import {
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";

import login1 from "../../assets/images/login/login.svg";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import app from "../../firebase/firebase.config";
import useTitle from "../../Hooks/UseTitle";

const auth = getAuth(app);
const Login = () => {
  useTitle("Login");
  const { providerLogin, signIn, setLoading } = useContext(AuthContext);

  //set google Auth provider
  const googleProvider = new GoogleAuthProvider();

  //for  input password error setup
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState(""); //create for store getting email for reset
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //google sign in
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider) //call google provider
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  //login part
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        // for jwt token

        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        //get jwt token

        fetch("https://car-wash-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            //local storage is the easiest not the best place to store jwt token
            localStorage.setItem("carwashToken", data.token);
          });

        setError(""); //successfully login hole error dekhabe nah clean kore felbeea
        // navigate(from, { replace: true });

        // //if email is verified than user can see home
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("please verify before login");
        }
      })
      .catch((error) => {
        console.error("password or email is wrong", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  //get email
  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
  };
  //password reset
  //forget password
  const handleForgetPassword = () => {
    //if user don't use email but want change password
    if (!userEmail) {
      toast.error("please enter your email");
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        toast.error("password reset email sent.Please check your email");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="my-20">
      <div className="hero min-h-screen ">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-3/4" src={login1} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 hover: shadow-purple-900 py-12">
            <h1 className="text-4xl text-center font-bold my-3">Login !</h1>
            <Form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onBlur={handleEmailBlur}
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {/* <label className="label">
                  <Link
                    onClick={handleForgetPassword()}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
              <p className="text-red-600">{error}</p>
            </Form>
            <p className="text-center">
              <>
                <button
                  onClick={handleForgetPassword}
                  className="btn btn-link btn-primary"
                >
                  Forget Password ?
                </button>
              </>
            </p>
            <p className="text-center">
              New to Car wash and Services{" "}
              <Link className="text-orange-600 font-bold ml-2" to="/signup">
                SignUp
              </Link>
            </p>
            <div className="text-center mt-3">
              <p>Or Sign In with </p>
              <button
                onClick={handleGoogleSignIn}
                className="btn rounded-full btn-secondary mt-2"
              >
                <FaGoogle></FaGoogle>
              </button>
              <button className="btn rounded-full btn-secondary mt-2 ml-2">
                <FaLinkedinIn></FaLinkedinIn>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
