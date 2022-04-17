import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./SignUp.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const firstName = event.target.firstname.value;
    const lastName = event.target.lastname.value;
    const name = `${firstName} ${lastName}`;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirm.value;
    console.log(email, password)
    createUserWithEmailAndPassword(email, password);
    navigate('/');
  };
  return (
    <div className="form-container d-flex align-items-center justify-content-center">
      <div>
        <h1 className="text-center mb-4">
          Sign <span className="text-warning">Up</span>
        </h1>
        <form onSubmit={handleSignUp} className="form">
          <input type="text" name="firstname" placeholder="First Name" required />
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
          <div className="password">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirm"
              placeholder="Confirm Password"
              required
            />
            <span className="password-icon">
              <FontAwesomeIcon
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                icon={showConfirmPassword ? faEyeSlash : faEye}
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
          <input
            disabled={!agree}
            type="submit"
            className={!agree ? "btn-muted" : "form-submit-btn"}
            value="Sign Up"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
