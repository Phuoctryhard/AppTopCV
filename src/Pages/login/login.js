import React from 'react';
import styles from './login.module.css'; // Import CSS module vào tệp JavaScript

function Login() {
    return (
        <div className={styles.login}>
            <h2 className={styles.heading2}>Sign in/up Form</h2>
            <div className={styles.container1} id="container">
                <div className={`${styles['form-container']} ${styles['sign-up-container']}`}>
                    <form action="/home" className={styles.form_login}>
                        <h1>Create Account</h1>
                        <div className={styles['social-container']}>
                            <a href="#" className={styles.social}><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className={styles.social}><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className={styles.span_login}>or use your email for registration</span>
                        <input className={styles.input_login} type="text" placeholder="Name" />
                        <input  className={styles.input_login} type="email" placeholder="Email" />
                        <input  className={styles.input_login} type="password" placeholder="Password" />
                        <button className={styles['btn-login']} onClick={() => { console.log("oki") }}>Sign Up</button>
                       
                    </form>
                </div>
                <div className={`${styles['form-container']} ${styles['sign-in-container']}`}>
                    <form action="#" className={styles.form_login}>
                        <h1 className={styles.heading1}>Sign in</h1>
                        <div className={styles['social-container']}>
                            <a href="#" className={styles.social}><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className={styles.social}><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className={styles.span_login}>or use your account</span>
                        <input  className={styles.input_login} type="email" placeholder="Email" />
                        <input  className={styles.input_login} type="password" placeholder="Password" />
                        <a href="#" className={styles.forget_password}>Forgot your password?</a>
                        <button className={styles['btn-login']} onClick={() => { console.log("oki") }} > <a href='/home'>Sign In</a> </button>
                    </form>
                </div>
                <div className={styles['overlay-container']}>
                    <div className={styles.overlay}>
                        <div className={`${styles['overlay-panel']} ${styles['overlay-left']}`}>
                            <h1 className={styles.heading1}>Welcome Back!</h1>
                            <p className={styles.para}>To keep connected with us please login with your personal info</p>
                            <button className={`${styles.ghost} ${styles['btn-login']}`} id="signIn">Sign In</button>
                         
                        </div>
                        <div className={`${styles['overlay-panel']} ${styles['overlay-right']}`}>
                            <h1 className={styles.heading1}>Hello, Friend!</h1>
                            <p className={styles.para}>Enter your personal details and start journey with us</p>
                            <button className={`${styles.ghost} ${styles['btn-login']}`} id="signUp" onClick={() => { console.log("oki") }}>Sign Up</button>
                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
