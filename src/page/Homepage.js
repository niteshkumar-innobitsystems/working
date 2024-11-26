import React, { useState } from 'react';
import Style from '../css/homepage.module.css';

function Homepage() {
    // State to manage form fields and error message
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [passwordFocused, setPasswordFocused] = useState(false); // To track if the password field is focused

    // Handle form submission
    const submit = (e) => {
        e.preventDefault(); // Prevent default form submit action
        if (password.length < 6) {
            setError('Please enter a stronger password (at least 6 characters)');
            setPasswordFocused(true); // Focus on the password field if password is weak
        } else {
            console.log('Email:', email);
            console.log('Password:', password);
            setError(''); // Clear the error message if the password is valid
        }
    };

    return (
        <div className={Style.main}>
            <div className={Style.container}>
                <div className={Style.sectionLogo}>
                    <div className={Style.logoImage}>
                        {/* Logo here */}
                    </div>
                </div>

                <div className={Style.sectionLogin}>
                    <div className={Style.loginTitle}>
                        <div className={Style.title}>Sign in with your Account</div>
                    </div>

                    <div className={Style.loginEmail}>
                        <div className={Style.emailText}>Email or Mobile Number</div>
                        <div className={Style.inputfield}>
                            <input 
                                type="text" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Email or Mobile Number" 
                                required 
                            />
                        </div>
                    </div>

                    <div className={Style.loginPassword}>
                        <div className={Style.passwordsection}>
                            <div className={Style.emailText}>Password</div>
                            <div className={Style.forgetText}>Forgot Password?</div>
                        </div>
                        <div className={Style.inputfield}>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                                onFocus={() => setPasswordFocused(true)}
                                onBlur={() => setPasswordFocused(false)}
                            />
                        </div>

                        {/* Conditional error message */}
                        {passwordFocused && password.length < 6 && (
                            <div className={Style.errorMessage}>
                                {error}
                            </div>
                        )}
                    </div>

                    <div className={Style.loginButton}>
                        <button className={Style.submitButton} onClick={submit}>Submit</button>
                    </div>
                </div>

                <div className={Style.sectionSignup}>
                    <hr />
                    <button className={Style.signupButton}>Create Your Account</button>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
