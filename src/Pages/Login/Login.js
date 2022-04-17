import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate('');
      if(error) {
        errorElement = <p className='text-danger'>{error.message}</p>
      }
      const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
      }
      if(user) {
        navigate('/');
      }
    return (
        <div className="form-container d-flex align-items-center justify-content-center">
      <div>
        <h1 className="text-center mb-4">
          Log <span className="text-warning">In</span>
        </h1>
        <form onSubmit={handleLogin} className="form">
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
          {errorElement}
          <input
            type="submit"
            className='form-submit-btn'
            value="Log In"
          />
        </form>
        <p>Don't Have an account. <span><Link className='text-warning text-decoration-none' to="/signup">Sign Up</Link></span></p>
        <ToastContainer></ToastContainer>
        <SocialLogin></SocialLogin>
      </div>
    </div>
    );
};

export default Login;