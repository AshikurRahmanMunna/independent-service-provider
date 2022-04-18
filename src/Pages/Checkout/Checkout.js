import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";


const Checkout = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    toast('Thank you for the booking');
    setTimeout(() => {
      navigate('/');
    }, 6000)
  };
  return (
    <div className="form-container d-flex align-items-center justify-content-center">
      <div>
        <h1 className="text-center text-warning mb-4">Checkout</h1>
        <form onSubmit={handleFormSubmit} className="form">
          <input
            type="text"
            name="name"
            value={user.displayName}
            readOnly
            required
          />
          <input
            type="email"
            name="email"
            value={user.email}
            readOnly
            required
          />
          <input type="text" name="address" placeholder="Address" required />
          <input type="text" name="phone" placeholder="Phone" required />
          <input type="submit" className="form-submit-btn" />
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Checkout;
