import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div className='bg-light question'>
                <h3>Difference between authorization and authentication</h3>
                <p>Authentication and authorization both are used to identifying a user. Authentication is a login system like email password based authentication. There a user is logged in with our own login system we provide. In that system we create a user and then we check the email password and give him permission to access our website. In the other hand, Authorization is a process we use any other login system that is not our own. We validate him by getting the data of user. And other login service gives him permission to login on this page. Like Google, Facebook, Twitter, Github, Microsoft, Apple, Yahoo, Play games, Game Center and many more like this.</p>
            </div>
            <div className='bg-light question'>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>We are using firebase. Firebase is a great tool for authentication. We are using firebase because in todays days making a own authentication system took too many times but we can implement the authentication system of firebase in shorter time than own authentication system. Using firebase authentication system is more easy than own authentication system. And firebase have a good security than own authentication system. Because firebase is created by google. There is too many professional developer who has created the authentication system more secure and with more data details. We have too many data of user when we create authentication system by firebase. Other third party authentication system like firebase are - Okta, OneLogin, JumpCloud,Microsoft Azure Active Directory, CyberArk Identity (formerly Idaptive), Auth0, Rippling, SecureAuth Identity Platform, ForgeRock. Or we can use our own authentication, but it still not good choice for us.</p>
            </div>
            <div className='bg-light question'>
                <h3>What other services does firebase provide other than authentication</h3>
                <p>Firebase does not only provide authentication. It provides many thing except authentication. Like Emulator Suite, Realtime database, Firestore, Storage, ML, Hosting, Cloud Functions, Security Rules, Extensions, Google Analytics, Predictions, Cloud Messaging, Test Lab,Crashlytics, Performance Monitoring, Test Lab, App Distribution, Remote Config, A/B Testing, Cloud Messaging, In-App Messaging, Dynamic Links, Google AdMob, Google Ads, App Indexing etc. Firebase has a full system we need for our website. This is very helpful.</p>
            </div>
        </div>
    );
};

export default Blogs;