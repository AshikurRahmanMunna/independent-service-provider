import React from 'react';
import './SocialLogin.css';
import google from '../../../images/google.png';
import facebook from '../../../images/facebook.png';
import { useAuthState, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    if(loadingGoogle || loadingFacebook) {
        return <div style={{height: '50px'}}>
            <Loading></Loading>
        </div>
    }
    if(user) {
        navigate(from, {replace: true});
    }
    return (
        <div>
            <div className='or'>
                <div></div>
                <p>Or</p>
                <div></div>
            </div>
            <div className='d-flex justify-content-between'>
                <button onClick={() => signInWithGoogle()} className='btn btn-info me-2 d-block mx-auto w-100'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-info ms-2 d-block mx-auto w-100'>
                    <img style={{width: '30px'}} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;