import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  let errorElement;
  const emailRef = useRef();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, errorSendPasswordReset] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate("");
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  if (error) {
    errorElement = <p className="text-danger">{error.message}</p>;
  }
  if (loading) {
    return (
      <div
        style={{ height: "100vh" }}
        className="d-flex align-items-center justify-content-center"
      >
        <Loading></Loading>
      </div>
    );
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const handlePasswordReset = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(email);
    toast(`Email sent to ${email}`);
  };
  if (user) {
    navigate(from, {replace: true});
  }
  return (
    <div className="form-container d-flex align-items-center justify-content-center">
      <div>
        <h1 className="text-center mb-4">
          Log <span className="text-warning">In</span>
        </h1>
        <form onSubmit={handleLogin} className="form">
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
            />
            <span className="password-icon">
              <FontAwesomeIcon
                onClick={() => setShowPassword(!showPassword)}
                icon={showPassword ? faEyeSlash : faEye}
              ></FontAwesomeIcon>
            </span>
          </div>
          {errorElement}
          <input type="submit" className="form-submit-btn" value="Log In" />
        </form>
        <p>
          Don't Have an account.{" "}
          <span>
            <Link className="text-warning text-decoration-none" to="/register">
              Register
            </Link>
          </span>
        </p>
        <p>
          Forgot your password.{" "}
          <span
            onClick={handlePasswordReset}
            style={{ cursor: "pointer" }}
            className="text-warning text-decoration-none"
          >
            Reset Password
          </span>
        </p>
        <ToastContainer></ToastContainer>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
