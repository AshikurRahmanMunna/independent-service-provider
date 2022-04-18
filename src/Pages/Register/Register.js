import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import "./Register.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  let errorElement;
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, errorUpdateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathName || "/";

  if (error || errorUpdateProfile) {
    errorElement = (
      <p className="text-danger">
        {error.message || errorUpdateProfile.message}
      </p>
    );
  }
  if (loading || updating) {
    return (
      <div style={{height: '90vh'}} className="d-flex align-items-center justify-content-center">
        <Loading></Loading>
      </div>
    );
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const firstName = event.target.firstname.value;
    const lastName = event.target.lastname.value;
    const name = `${firstName} ${lastName}`;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  if (user) {
    navigate(from, {replace: true});
  }
  console.log(user);
  return (
    // Register
    <div className="form-container d-flex align-items-center justify-content-center">
      <div>
        <h1 className="text-center mb-4">
          Regis<span className="text-warning">ter</span>
        </h1>
        <form onSubmit={handleRegister} className="form">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            required
          />
          <input type="text" name="lastname" placeholder="Last Name" required />
          <input type="email" name="email" placeholder="Email" required />
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

          <div className="d-flex">
            <input
              type="checkbox"
              style={{ width: "15px" }}
              name="agree"
              id="checkbox"
              required
              onClick={() => setAgree(!agree)}
            />
            <label
              style={{ paddingTop: "7px", paddingLeft: "10px" }}
              htmlFor="checkbox"
            >
              Agree Our Terms and Conditions.
            </label>
          </div>
          {errorElement}
          <input
            disabled={!agree}
            type="submit"
            className={!agree ? "btn-muted" : "form-submit-btn"}
            value="Register"
          />
        </form>
        <p>
          Already Have an account.{" "}
          <span>
            <Link className="text-warning text-decoration-none" to="/login">
              Log In
            </Link>
          </span>
        </p>
        <ToastContainer></ToastContainer>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
